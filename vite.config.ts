import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  // 设置GitHub Pages部署的基础路径
  // 如果你的仓库名是 'gd'，则设置为 '/gd/'
  // 如果是部署到用户页面（username.github.io），则设置为 '/'
  base: '/Resume/',
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
