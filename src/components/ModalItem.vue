<script setup>
import { ref, watch } from 'vue';
import {store} from "../store.js"

const storageStatus = ref(store);
const gameResults = ref(JSON.parse(localStorage.getItem("gameResult")))
console.log(gameResults.value.gameResult);

if(storageStatus === true){
  console.warn("oh my god");
  gameResults.value = ref(JSON.parse(localStorage.getItem("gameResult")))
}

watch(store,async(newVal,oldVal)=>{
  console.log(newVal.storageStatus);
  gameResults.value = JSON.parse(localStorage.getItem("gameResult"))
})

</script>

<template>
  <div>
    <div v-for="(result,index) in gameResults.gameResult" class="flex my-2">
      <div class="px-1">{{index + 1}}</div>
      <div :style="`width:${result.winCounter > 0 ? result.winCounter : result.winCounter +1}0%`">
        <div 
        class=" opacity-90 px-1"
        :class="{'text-right bg-green-800':result.winCounter > 0,'bg-gray-500':result.winCounter <= 0}"
        >
          {{result.winCounter}}
        </div>
      </div>
    </div>
  </div>
</template>
