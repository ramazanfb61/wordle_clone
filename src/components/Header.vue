<script setup>
import { mdiInformation, mdiCog, mdiChartBox, mdiAlphaW } from "@mdi/js";
import ModalItem from "./ModalItem.vue";
import { endGame, gameAnswer } from "../store";
import { onMounted, ref, watch } from "vue";



const modal = ref(null)
const info = ref(null)
const change = ref(false)
const answer = ref(gameAnswer.answer);
const exOne = ref(["E", "L", "M", "A", "S"]);

function setLocalStorage(modal){
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
    change.value = true
    localStorage.setItem("gameResult", JSON.stringify(setItem));
  }
}
setLocalStorage()


function reloadPage() {
  location.reload();
}


function infoOpen() {
  info.value.showModal();
}

function modalOpen() {
  modal.value.showModal();
}
const interval = setInterval(() => {
  if (endGame.endGameModal === true) {
    modalOpen();
    clearInterval(interval);
  }
  answer.value = gameAnswer.answer.join("");
}, 1000);

const infoInterval = setInterval(() => {
  if (change.value === true) {
    console.log(change.value);
    info.value.showModal()
    clearInterval(infoInterval);
  }
  
}, 100);
</script>

<template>
  <header class="border-b border-primary p-2">
    <div class="flex justify-between lg:w-2/3 lg:mx-auto">
      <div>
        <v-icon
          class="text-green-700"
          :size="32"
          type="mdi"
          :path="mdiAlphaW"
        ></v-icon>
      </div>
      <h2 class="font-semibold text-xl translate-x-6">Wordle</h2>
      <div class="flex">
        <button @click="infoOpen" class="">
          <v-icon class="text-icon" type="mdi" :path="mdiInformation"></v-icon>
        </button>
        <button @click="modalOpen" class="mx-1">
          <v-icon class="text-icon" type="mdi" :path="mdiChartBox"></v-icon>
        </button>
      </div>
    </div>
  </header>
  <dialog
    ref="modal"
    class="w-72 md:w-80 px-3 py-2 backdrop:opacity-70 backdrop:bg-primary rounded shadow-md shadow-black -translate-y-28"
  >
    <div class="pb-6">
      <div class="mb-5">
        <h4>İstatistikler</h4>
      </div>
      <div v-if="endGame.endGameModal === true">Cevap : {{ answer }}</div>
      <div class="">
        <modal-item></modal-item>
      </div>
    </div>
    <div class="">
      <form method="dialog" class="flex justify-between">
        <button class="p-1 rounded bg-red-800">X Kapat</button>
        <button class="p-1 rounded bg-green-800" @click="reloadPage">
          + Yeni Kelime
        </button>
      </form>
    </div>
  </dialog>
  <dialog class="w-full h-full backdrop:bg-primary" :ref="'info'">
    <div class="">
      <div class="flex justify-between p-1">
        <div></div>
        <h3 class="text-center text-xl mb-5">Nasıl Oynanır?</h3>
        <form method="dialog">
          <button class="px-1 rounded-3xl bg-gray-700">X</button>
        </form>
      </div>
      <div class="flex flex-col items-center ">
        <div>
          <div class="my-1 mb-4">
            <p>Kelimeyi 6 denemede bulun.</p>
            <p>Her tahmin 5 harfli bir kelime olmalıdır.</p>
            <p>Her tahminden sonra kutucuğun rengi değişecektir.</p>
          </div>
          <hr />
          <h4 class="my-2">Örnekler</h4>
          <div class="my-4">
            <div class="flex my-2">
              <span
                v-for="(item, index) in exOne"
                class="boardItem"
                :class="{ 'bg-green-600': index === 0 }"
              >
                {{ item }}
              </span>
            </div>
            <p>E harfi var ve doğru yerde</p>
          </div>
          <div class="my-4">
            <div class="flex my-2">
              <span
                v-for="(item, index) in exOne"
                class="boardItem"
                :class="{ 'bg-yellow-700': index === 3 }"
              >
                {{ item }}
              </span>
            </div>
            <p>A harfi var ama yanlış yerde</p>
          </div>
          <div class="my-4">
            <div class="flex my-2">
              <span
                v-for="(item, index) in exOne"
                class="boardItem"
                :class="{ 'bg-gray-500': index === 4 }"
              >
                {{ item }}
              </span>
            </div>
            <p>S harfi yok</p>
          </div>
          <p class="mt-10">İyi Eğlenceler 
            <a href="https://github.com/ramazanfb61" class="text-blue-500 underline">@ramazanfb61</a>
          </p>
        </div>
      </div>
    </div>
  </dialog>
</template>
