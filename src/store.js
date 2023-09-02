import { reactive } from "vue";


export const store = reactive({
  storageStatus : false,
  
  updateStorage(){
    this.storageStatus = true 
    console.log("state",this.storageStatus);
  }
})


export const endGame = reactive({
  endGameModal : false,
  updateEndGameModal(){
    this.endGameModal = true;
  }
})


