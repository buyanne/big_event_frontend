import './assets/main.scss'
import App from './App.vue'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import router from '@/router'
import locale from 'element-plus/dist/locale/zh-cn.js'
import {createPersistedState} from 'pinia-persistedstate-plugin'
import {createPinia} from "pinia";
import { createApp } from 'vue'

const persist = createPersistedState();
const pinia=createPinia()
const app=createApp(App);

pinia.use(persist)
app.use(pinia);
app.use(ElementPlus,{locale});
app.use(router)
app.mount('#app');
