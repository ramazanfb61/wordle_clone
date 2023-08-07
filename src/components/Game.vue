<script setup>
import { ref, onMounted, watch } from "vue"

const keyboard = ["e", "r", "t", "y", "u", "ı", "o", "p", "ğ", "ü", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ş", "i", "z", "c", "ç", "v", "b", "n", "m", "ö"]

const word = ref(Array(5).fill(null))
const words = ref(Array(6).fill(Array(5).fill('')))
const tryCounter = ref(0)
const wordStatus = ref([])
const order = ref(0)
const answer = ref(["E", "L", "M", "A", "S"])

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

onMounted(() => {


})

function enterWord() {
  if (order.value === 5) {
    order.value = 0;  
    words.value.splice(tryCounter.value++, 1, word.value)
    checkWord()
    console.log("tryCounter", tryCounter.value);
    console.log("burası word", word.value);
    word.value = Array(5).fill(null);
    console.log("burası words", words.value);
  }
}



function checkWordStatus(index,val){
  const result = wordStatus.value.forEach((el,indexNum)=>{
    return el.includes(val)
  })
  console.log("hacı",result);
}

function checkWord() {
  console.log(tryCounter.value);
  wordStatus.value.push(words.value[tryCounter.value -1].filter((element, index) => answer.value.find((el => el === element)))) 
  checkWordStatus()
  console.log("wordStatus", wordStatus.value);
  console.log("hello buras", words.value[tryCounter.value - 1]);
}
</script>

<template>
  <main class="flex justify-center lg:mt-10 md:mt-8 mt-4 ">
    <div class="grid grid-rows-6 gap-y-2 font-semibold text-3xl">
      <div v-for="(item, index) in words" class="grid grid-cols-5 gap-x-2">
        <div v-if="tryCounter === index" v-for="a in word" class="boardItem">{{ a }}</div>
        <div v-else-if="item" v-for="(a, index) in item" class="boardItem  ease-linear duration-300"
          :class="a === answer[index] ? { 'bg-green-600': a === answer[index] } : { 'bg-yellow-700': checkWordStatus(index,a) }">
          {{ a }}
        </div>
      </div>
    </div>
  </main>

  <div class="flex  justify-center mt-8 mb-4">
    <div class="grid grid-cols-10 gap-x-1 gap-y-2 lg:gap-x-3 lg:gap-y-3">
      <button @click="addLetter(letter.toUpperCase())" value="letter" v-for="letter in keyboard"
        class="border border-primary flex justify-center items-center py-2 px-3 rounded delEnter">
        {{ letter.toUpperCase() }}
      </button>
    </div>
  </div>
  <div class="flex justify-center  text-xl">
    <button @click="deleteLetter"
      class="col-span-4 border p-1 px-6 mt-2 mx-3 rounded bg-red-900 border-primary   ">Sil</button>
    <button @click="enterWord"
      class="col-span-4 border p-1 px-6 mt-2 mx-3 rounded bg-green-900 border-primary ">Gir</button>
  </div>
</template>