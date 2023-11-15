import { createApp } from 'vue';
/** ElementPlus */
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
/** My components */
import CustomIcon from './components/CustomIcon.vue';
/** App, router and axios */
import App from './App.vue';
import router from './router';
// import axios from 'axios';
// import VueAxios from 'vue-axios';
/** CSS - SCSS */
import 'element-plus/theme-chalk/dark/css-vars.css';
import './assets/sass/index.scss';



const app = createApp(App);
//global variables
app.use(ElementPlus)
app.use(router)
// app.use(VueAxios, axios)
// app.provide('axios', axios)
//icons 
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.component('custom-icon', CustomIcon)
app.mount('#app')


