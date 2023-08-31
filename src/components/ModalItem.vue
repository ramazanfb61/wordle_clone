<script setup>
import { ref } from 'vue';

const gameResults = ref(JSON.parse(localStorage.getItem("gameResult")))
console.log(gameResults.value.gameResult);

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
