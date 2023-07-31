<script setup>
import { ref, onMounted, watch } from "vue"

const keyboard = ["e", "r", "t", "y", "u", "ı", "o", "p", "ğ", "ü", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ş", "i", "z", "c", "ç", "v", "b", "n", "m", "ö"]

const word = ref(Array(5).fill(""))
const words = ref(Array(6).fill(Array(5).fill('')))
const placeHolder = ref(" ")
const tryCounter = ref(0)

const order = ref(0)

onMounted(() => {
  console.log(word.value, words.value);
})

function deleteLetter() {
  if (order.value > 0) {
    order.value--
  }
  word.value.splice(order.value, 1, "")
  console.log(word.value);
}
function addLetter(letter) {
  if (order.value < 5) {
    word.value.splice(order.value++, 1, letter)
    console.log("order value", order.value);
    console.log(letter);
    console.log(word.value);
  }
}

function enterWord() {

  tryCounter.value++
  order.value = 0;
  words.value.splice(order.value++, 0, word.value)
  console.log("burası word", word.value);
  word.value = [];
  console.log("burası words", words.value);

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
      <div v-for="(value, key, index) in words" class="grid grid-cols-5 gap-x-2">
        <div v-if="words[index]" v-for="a in words[index]" class="boardItem">{{ a }}</div>
        <div v-else-if="tryCounter === index" v-for="a in word" class="boardItem">{{ a }}</div>
      </div>
      <!-- <div class="grid grid-cols-5 gap-x-2"> -->
        <!-- <div class="boardItem">1</div> -->
        <!-- <div class="boardItem">1</div> -->
        <!-- <div class="boardItem">1</div> -->
        <!-- <div class="boardItem">1</div> -->
        <!-- <div class="boardItem">1</div> -->
      <!-- </div> -->
      <!-- <div class="grid grid-cols-5 gap-x-2"> -->
        <!-- <div class="boardItem">1</div> -->
        <!-- <div class="boardItem">1</div> -->
        <!-- <div class="boardItem">1</div> -->
        <!-- <div class="boardItem">1</div> -->
        <!-- <div class="boardItem">1</div> -->
      <!-- </div> -->
      <!-- <div class="grid grid-cols-5 gap-x-2"> -->
        <!-- <div class="boardItem">1</div> -->
        <!-- <div class="boardItem">1</div> -->
        <!-- <div class="boardItem">1</div> -->
        <!-- <div class="boardItem">1</div> -->
        <!-- <div class="boardItem">1</div> -->
      <!-- </div> -->
      <!-- <div class="grid grid-cols-5 gap-x-2"> -->
        <!-- <div class="boardItem">1</div> -->
        <!-- <div class="boardItem">1</div> -->
        <!-- <div class="boardItem">1</div> -->
        <!-- <div class="boardItem">1</div> -->
        <!-- <div class="boardItem">1</div> -->
      <!-- </div> -->
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