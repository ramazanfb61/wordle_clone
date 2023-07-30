<script setup>
import { ref, onMounted,watch } from "vue"
import Board from "./Board.vue"

const keyboard = ["e", "r", "t", "y", "u", "ı", "o", "p", "ğ", "ü", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ş", "i", "z", "c", "ç","v", "b", "n", "m", "ö"]

const props = defineProps(
  {
    word : Array,
    words : Array,
    tryCounter:Number
  }
);

const wordTryCount = ref(0);

function deleteLetter(){
  props.word.pop()
}
function addLetter(letter){
  console.log(letter);
  props.word.push(letter)
  console.log(props.word);
}

function enterWord(){
  if(props.word.length === 5){
    props.words.push(props.word)
    props.word = [];
    props.tryCounter++
    console.log("burası",props.words);
    console.log("burası word",props.word);

  }
}
</script>

<template>
  <div class="flex justify-center mt-8 mb-8">
    <div class="grid grid-cols-10 gap-x-3 gap-y-3">
      <button @click="addLetter(letter)" value="letter" v-for="letter in keyboard" class="border border-primary flex justify-center items-center p-2 rounded delEnter">
        {{ letter }}
      </button>
        <button @click="deleteLetter" class="col-span-4 border p-1 rounded bg-red-900 border-primary mt-2">sil</button>
        <div></div>
        <div></div>
        <button @click="enterWord" class="col-span-4 border p-1 rounded bg-green-900 border-primary mt-2">enter</button>
    </div>
  </div>
</template>