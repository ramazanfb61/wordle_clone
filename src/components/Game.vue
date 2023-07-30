<script setup>
import { ref, onMounted, watch } from "vue"

const keyboard = ["e", "r", "t", "y", "u", "ı", "o", "p", "ğ", "ü", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ş", "i", "z", "c", "ç", "v", "b", "n", "m", "ö"]

const word = ref([])
const words = ref([])
const placeHolder = ref(" ")
const tryCounter = ref(0)

onMounted(() => {
  console.log(word.value,words);
})

function deleteLetter() {
  word.value.pop()
}
function addLetter(letter) {
  if (word.value.length < 5) {
    console.log(letter);
    word.value.push(letter)
    console.log(word.value);
  }
}

function enterWord() {
  if (word.value.length === 5) {
    words.value.push(word.value)
    console.log("burası word", word.value);
    word.value = [];
    tryCounter.value++
    console.log("burası words", words.value);


  }
}

function checkLetter(a) {
  if (a) {
    return a
  } else {
    return ' '
  }
}
</script>

<template>
  <main class="flex justify-center lg:mt-10 md:mt-8 mt-4 ">
    <div class="grid grid-rows-6 gap-y-2 ">
      <h1 class="grid grid-cols-5 gap-x-2">
        <div v-if="words[0]" v-for="a in words[0]" class="boardItem">{{ a }}</div>
        <div v-else-if="word.length > 0" v-for="a in word" class="boardItem">{{ a }}</div>
        <div v-else v-for="a in 5" class="boardItem">{{ placeHolder }}</div>
      </h1>
      <h1 class="grid grid-cols-5 gap-x-2">
        <div class="boardItem">1</div>
        <div class="boardItem">1</div>
        <div class="boardItem">1</div>
        <div class="boardItem">1</div>
        <div class="boardItem">1</div>
      </h1>
      <h1 class="grid grid-cols-5 gap-x-2">
        <div class="boardItem">1</div>
        <div class="boardItem">1</div>
        <div class="boardItem">1</div>
        <div class="boardItem">1</div>
        <div class="boardItem">1</div>
      </h1>
      <h1 class="grid grid-cols-5 gap-x-2">
        <div class="boardItem">1</div>
        <div class="boardItem">1</div>
        <div class="boardItem">1</div>
        <div class="boardItem">1</div>
        <div class="boardItem">1</div>
      </h1>
      <h1 class="grid grid-cols-5 gap-x-2">
        <div class="boardItem">1</div>
        <div class="boardItem">1</div>
        <div class="boardItem">1</div>
        <div class="boardItem">1</div>
        <div class="boardItem">1</div>
      </h1>
      <h1 class="grid grid-cols-5 gap-x-2">
        <div class="boardItem">1</div>
        <div class="boardItem">1</div>
        <div class="boardItem">1</div>
        <div class="boardItem">1</div>
        <div class="boardItem">1</div>
      </h1>
    </div>
  </main>

  <div class="flex justify-center mt-8 mb-8">
    <div class="grid grid-cols-10 gap-x-1 gap-y-2 lg:gap-x-3 lg:gap-y-3">
      <button @click="addLetter(letter)" value="letter" v-for="letter in keyboard"
        class="border border-primary flex justify-center items-center py-2 px-3 rounded delEnter">
        {{ letter }}
      </button>
      <button @click="deleteLetter" class="col-span-4 border p-1 rounded bg-red-900 border-primary mt-2">sil</button>
      <div></div>
      <div></div>
      <button @click="enterWord" class="col-span-4 border p-1 rounded bg-green-900 border-primary mt-2">enter</button>
    </div>
  </div>
</template>