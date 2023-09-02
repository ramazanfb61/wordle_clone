<script setup lang="ts">
import { mdiInformation, mdiCog, mdiChartBox, mdiAlphaW } from "@mdi/js";
import ModalItem from "./ModalItem.vue";
import { endGame } from "../store";
import { watch, ref, onMounted } from "vue";

const modal = ref(null);

function reloadPage(){
  location.reload()
}

function modalOpen() {
  modal.value.showModal();
}
const interval = setInterval(() => {
  if (endGame.endGameModal === true) {
    modalOpen();
    clearInterval(interval);
  }
}, 10);
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
        <button class="">
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

      <div class="">
        <modal-item></modal-item>
      </div>
    </div>
    <div class="">
      <form method="dialog" class=" flex justify-between">
        <button class="p-1 rounded bg-red-800">X Kapat</button>
        <button class="p-1 rounded bg-green-800" @click="reloadPage">+ Yeni Kelime</button>
      </form>
      
    </div>
  </dialog>
</template>
