import { reactive } from "vue";


export const store = reactive({
  storageStatus : false,
  
  updateStorage(){
    this.storageStatus = true 
  }
})


export const endGame = reactive({
  endGameModal : false,
  updateEndGameModal(){
    this.endGameModal = true;
  }
})


