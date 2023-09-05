import { createRouter, createWebHistory } from "vue-router"
import InfoPage from  "./components/InfoPage.vue"
import Game   from   "./components/Game.vue"


const routes = [
  {path:'/',component : Game},
  {path:'/howto',component : InfoPage}
]


export const router = createRouter({
  history: createWebHistory(),
  routes
})