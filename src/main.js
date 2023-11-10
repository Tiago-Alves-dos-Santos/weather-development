import { createApp } from 'vue'
/** ElementPlus */
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';
// import * as components from '@element-plus/icons-vue'
/** App and router */
import App from './App.vue'
import router from './router'
/** CSS - SCSS */
import 'element-plus/theme-chalk/dark/css-vars.css';
import './assets/sass/index.scss';

createApp(App)
.use(ElementPlus)
.use(router)
.mount('#app')
