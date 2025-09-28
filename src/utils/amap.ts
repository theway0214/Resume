// 初始化高德地图
export const initAMap = async () => {
  return new Promise<void>((resolve, reject) => {
    try {
      // 检查是否已经加载
      if (window.AMap) {
        resolve()
        return
      }

      // 创建script标签
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true

      // 获取当前域名
      const hostname = window.location.hostname
      const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1'

      console.log('当前域名:', hostname)
      console.log('是否为本地环境:', isLocalhost)

      // 添加安全域名配置
      const mapUrl = `https://webapi.amap.com/maps?v=2.0&key=2fbd4b1239ef6e9c5606d92f60ef9730&plugin=AMap.ToolBar,AMap.Scale,AMap.MouseTool,AMap.PlaceSearch,AMap.GeometryUtil,AMap.Marker`
      console.log('地图加载URL:', mapUrl)
      script.src = mapUrl

      // 加载完成回调
      script.onload = () => {
        // 检查 AMap 是否正确加载
        if (!window.AMap) {
          reject(new Error('高德地图加载失败：AMap 对象未定义'))
          return
        }
        resolve()
      }

      // 加载失败回调
      script.onerror = (error) => {
        console.error('高德地图加载错误:', error)
        if (isLocalhost) {
          console.warn('本地开发环境提示：请确保已在控制台添加 localhost 域名白名单')
        }
        reject(new Error('高德地图加载失败，请检查网络连接和 Key 配置'))
      }

      // 添加到页面
      document.head.appendChild(script)
    } catch (error) {
      console.error('初始化高德地图时发生错误:', error)
      reject(error)
    }
  })
}
