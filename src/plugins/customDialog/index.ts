import { createApp } from 'vue'
import CustomDialog from './CustomDialog.vue'
import type { App } from 'vue'
import type { DialogPlugin } from './type'

export default {
  install(app: App) {
    app.config.globalProperties.$showDialog = (options: DialogPlugin) => {
      const dialogApp = createApp(CustomDialog, options)
      const containerDom = document.createElement('div')
      dialogApp.mount(containerDom)
      document.body.appendChild(containerDom)
    }
  }
}
