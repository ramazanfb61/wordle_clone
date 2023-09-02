<script setup lang="ts">
import { mdiInformation, mdiCog, mdiChartBox, mdiAlphaW } from "@mdi/js";
import ModalItem from "./ModalItem.vue";
import { endGame } from "../store";
import { watch } from "vue";

watch(endGame, async (newVal, oldVal) => {
  if (newVal.endGameModal === true) {
    console.log("work");
    const modal = document.querySelector("dialog");
  modal?.showModal();  }
  
});

function work() {
  const modal = document.querySelector("dialog");
  modal?.showModal();
}
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
        <button @click="work" class="mx-1">
          <v-icon class="text-icon" type="mdi" :path="mdiChartBox"></v-icon>
        </button>
      </div>
    </div>
  </header>
  <dialog
    id="modal"
    class="w-72 md:w-80 px-3 py-2 backdrop:opacity-70 backdrop:bg-primary rounded shadow-md shadow-black -translate-y-28"
  >
    <div class="">
      <div class="mb-5">
        <h4>İstatistikler</h4>
      </div>

      <div class="">
        <modal-item></modal-item>
      </div>
    </div>
    <form method="dialog" class="text-right mt-3">
      <button class="p-1 rounded bg-red-800">Close</button>
    </form>
  </dialog>
</template>
