export class WaterMark {
  #observer: MutationObserver | null = null
  #waterMarkElement: HTMLElement | null = null
  #config: {
    id: string
    text: string
    fontSize: string
    color: string
    zIndex: number
    width: number
    height: number
    fontFamily: string
    rotate: number
    container: HTMLElement | null
  } = {
    id: 'waterMark',
    text: '',
    fontSize: '16px',
    color: 'rgba(0, 0, 0, 0.1)',
    zIndex: 9999,
    width: 0,
    height: 0,
    fontFamily: 'sans-serif',
    rotate: 45,
    container: null,
  }
  #cacheBase64: string | null = null

  #isDestroyed: boolean = true

  constructor() {
  }
  // 创建canvas
  #createCanvas(text:string) {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if(!ctx){
      return null
    }
    const config = this.#config
    ctx.font = text
    ctx.fillStyle = config.color
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.translate(config.width/2,config.height/2)
    ctx.rotate(config.rotate * Math.PI / 180)
    ctx.fillText(text, 0, 0)
    return canvas.toDataURL('image/png')
  }

//   挂载dom
  #applyAndMount(text:string){
    if(!this.#cacheBase64 || this.#config.text !== text){
      this.#cacheBase64 = this.#createCanvas(text)
    }

    if(!this.#waterMarkElement){
        this.#waterMarkElement = document.createElement('div')
    }

    const container = this.#config.container || document.body
    const id = this.#config.id || 'waterMark'

    this.#waterMarkElement.id = id

    Object.assign(this.#waterMarkElement.style, {
      position: 'absolute',
      top: '0',
      left: '0',
      width: `${this.#config.width}px`,
      height: `${this.#config.height}px`,
      pointerEvents: 'none',
      zIndex: `${this.#config.zIndex}`,
      backgroundImage: `url(${this.#cacheBase64})`,
    })

    if (!container.contains(this.#waterMarkElement)) {
        container.appendChild(this.#waterMarkElement);
    }
  }

   /**
     * 启动 MutationObserver 监控
     */
    #startObserver() {
        if (this.#observer) this.#observer.disconnect(); // 先断开旧的

        const callback = (mutations: MutationRecord[]) => {
            for (const mutation of mutations) {
                // 处理节点移除
                for (const removedNode of mutation.removedNodes) {
                    if (removedNode === this.#waterMarkElement) {
                        console.warn('水印被移除，正在恢复...');
                        this.#applyAndMount(this.#config.text);
                        return;
                    }
                }
                // 处理属性修改 (简化版，可以按需扩展为精细化恢复)
                if (mutation.type === 'attributes' && mutation.target === this.#waterMarkElement) {
                    console.warn('水印属性被修改，正在恢复...');
                    this.#applyAndMount(this.#config.text);
                    return;
                }
            }
        };

        this.#observer = new MutationObserver(callback);
        const container = this.#config.container || document.body;
        this.#observer.observe(container, {
            childList: true,
            subtree: true,
            attributes: true,
        });
    }

    /**
     * 公共 API: 设置或更新水印
     * @param {string} text - 水印文本
     * @param {object} [config={}] - 配置对象
     */
    set(text: string, config = {}) {
        this.#isDestroyed = false;
        // 保存文本到配置中，方便恢复时使用
        this.#config = { ...this.#config, ...config, text }; 
        this.#applyAndMount(text);
        this.#startObserver();
    }

    /**
     * 公共 API: 销毁水印
     */
    destroy() {
        if (this.#isDestroyed) return;

        if (this.#observer) {
            this.#observer.disconnect();
            this.#observer = null;
        }

        if (this.#waterMarkElement && this.#waterMarkElement.parentNode) {
            this.#waterMarkElement.parentNode.removeChild(this.#waterMarkElement);
            this.#waterMarkElement = null;
        }

        this.#cacheBase64 = null;
        this.#isDestroyed = true;
    }
}
