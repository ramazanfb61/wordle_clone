<script setup>
import Header from   "./components/Header.vue"
import Game   from   "./components/Game.vue"

function setLocalStorage(){
  if (localStorage.getItem("gameResult")) {
    return 1
  } else {
    const setItem = {

      totalGamesPlayed : 0,
      totalWin : 0,
      gameResult: [
        {
          winCounter: 0,
        },
        {
          winCounter: 0,
        },
        {
          winCounter: 0,
        },
        {
          winCounter: 0,
        },
        {
          winCounter: 0,
        },
        {
          winCounter: 0,
        },
      ],
      
    };
    localStorage.setItem("gameResult", JSON.stringify(setItem));
  }

}

setLocalStorage()


</script>

<template>
  <Header></Header>
  <Game />
</template>

<style scoped>

</style>