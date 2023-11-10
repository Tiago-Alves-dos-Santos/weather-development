import { createApp } from 'vue'
/** ElementPlus */
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
/** App and router */
import App from './App.vue'
import router from './router'

createApp(App)
.use(ElementPlus)
.use(router)
.mount('#app')
