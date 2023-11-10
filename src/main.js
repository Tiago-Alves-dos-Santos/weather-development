import { createApp } from 'vue';
/** ElementPlus */
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
/** My components */
import CustomIcon from './components/CustomIcon.vue';
/** App and router */
import App from './App.vue';
import router from './router';
/** CSS - SCSS */
import 'element-plus/theme-chalk/dark/css-vars.css';
import './assets/sass/index.scss';



const app = createApp(App);
app.use(ElementPlus)
app.use(router)
//icons 
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.component('custom-icon', CustomIcon)
app.mount('#app')
