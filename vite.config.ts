import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  plugins: [vue(), vueJsx(), Inspect()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      assets: fileURLToPath(new URL('./src/assets', import.meta.url)),
      util: fileURLToPath(new URL('./src/utils', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      // 配置全局混入样式文件
      less: {
        additionalData: `@import '@/assets/style/minix.less';`
      }
    }
  }
})
