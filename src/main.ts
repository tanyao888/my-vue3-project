import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import CustomDialog from '@/plugins/customDialog/index'

import '@/assets/style/base.less'
import 'element-plus/dist/index.css'
import '@/assets/style/reset.less'

const app = createApp(App)
window.$app = app.config.globalProperties

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(CustomDialog)

app.mount('#app')
