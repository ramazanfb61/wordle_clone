import { createApp,provide } from 'vue'
import './style.css'
import App from './App.vue'
import Icon from "@jamescoyle/vue-icon"
import { Notyf } from 'notyf';


createApp(App)
  .component("v-icon", Icon)
  .provide(() =>  
    "notyf": new Notyf({
      duration: 5000 // Set your global Notyf configuration here
    })
  )
  .mount('#app')

