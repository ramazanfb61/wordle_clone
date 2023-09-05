import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Icon from "@jamescoyle/vue-icon"
import {router} from "./router"


createApp(App)
  .component("v-icon", Icon)
  .use(router)
  .mount('#app')