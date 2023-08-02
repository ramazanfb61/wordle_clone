<script setup>
import { ref, onMounted, watch } from "vue"

const keyboard = ["e", "r", "t", "y", "u", "ı", "o", "p", "ğ", "ü", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ş", "i", "z", "c", "ç", "v", "b", "n", "m", "ö"]

const word = ref(Array(5).fill(null))
const words = ref(Array(6).fill(Array(5).fill('')))
const tryCounter = ref(0)

const order = ref(0)

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

onMounted(()=>{
  const word = ["El","L","M","A","S"]
  const result = word.filter((item)=> item === "El")


  console.log(result);
})

function enterWord() {
  order.value = 0;
  //tryCounter.value++
  words.value.splice(tryCounter.value++, 1, word.value)
  checkWord()
  console.log("tryCounter", tryCounter.value);
  console.log("burası word", word.value);
  word.value = Array(5).fill(null);
  console.log("burası words", words.value);
}
function checkWord() {
  const theWord = ["El","L","M","A","S"];
  
  let result = ["El","L","M","A","S"].filter((item)=>{
    item === "L"
  })


  console.log(result);
  console.log("hello buras",words.value[tryCounter.value - 1]);
}
</script>

<template>
  <main class="flex justify-center lg:mt-10 md:mt-8 mt-4 ">
    <div class="grid grid-rows-6 gap-y-2 font-semibold text-3xl">
      <div class="grid grid-cols-5 gap-x-2">
        <div v-if="tryCounter === 0" v-for="a in word" class="boardItem">{{ a }}</div>
        <div v-else-if="words[0]" v-for="a in words[0]" class="boardItem">{{ a }}</div>
      </div>
      <div class="grid grid-cols-5 gap-x-2">
        <div v-if="tryCounter === 1" v-for="a in word" class="boardItem">{{ a }}</div>
        <div v-else-if="words[1]" v-for="a in words[1]" class="boardItem">{{ a }}</div>
      </div>
      <div class="grid grid-cols-5 gap-x-2">
        <div v-if="tryCounter === 2" v-for="a in word" class="boardItem">{{ a }}</div>
        <div v-else-if="words[2]" v-for="a in words[2]" class="boardItem">{{ a }}</div>
      </div>
      <div class="grid grid-cols-5 gap-x-2">
        <div v-if="tryCounter === 3" v-for="a in word" class="boardItem">{{ a }}</div>
        <div v-else-if="words[3]" v-for="a in words[3]" class="boardItem">{{ a }}</div>
      </div>
      <div class="grid grid-cols-5 gap-x-2">
        <div v-if="tryCounter === 4" v-for="a in word" class="boardItem">{{ a }}</div>
        <div v-else-if="words[4]" v-for="a in words[4]" class="boardItem">{{ a }}</div>
      </div>
      <div class="grid grid-cols-5 gap-x-2">
        <div v-if="tryCounter === 5" v-for="a in word" class="boardItem">{{ a }}</div>
        <div v-else-if="words[5]" v-for="a in words[5]" class="boardItem">{{ a }}</div>
      </div>
    </div>
  </main>

  <div class="flex  justify-center mt-8 mb-4">
    <div class="grid grid-cols-10 gap-x-1 gap-y-2 lg:gap-x-3 lg:gap-y-3">
      <button @click="addLetter(letter.toUpperCase())" value="letter" v-for="letter in keyboard"
        class="border border-primary flex justify-center items-center py-2 px-3 rounded delEnter">
        {{ letter.toUpperCase() }}
      </button>
      <!-- <button @click="deleteLetter" class="col-span-4 border p-1 rounded bg-red-900 border-primary mt-2">sil</button>
      <div></div>
      <div></div>
      <button @click="enterWord" class="col-span-4 border p-1 rounded bg-green-900 border-primary mt-2">enter</button> -->
    </div>

  </div>
  <div class="flex justify-center  text-xl">
    <button @click="deleteLetter" class="col-span-4 border p-1 px-6 mt-2 mx-3 rounded bg-red-900 border-primary   ">Sil</button>
    <button @click="enterWord"    class="col-span-4 border p-1 px-6 mt-2 mx-3 rounded bg-green-900 border-primary ">Gir</button>
  </div>
</template>