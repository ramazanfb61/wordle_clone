<template>
  <header class="border-b border-primary p-2">
    <div class="flex justify-between">
      <div>
        <v-icon class="text-green-700" :size="32" type="mdi" :path="mdiAlphaW"></v-icon>
      </div>
      <h2 class="font-semibold text-xl translate-x-6">Lettertl</h2>
      <div class="flex">
        <button class="">
          <v-icon class="text-icon" type="mdi" :path="mdiInformation"></v-icon>
        </button>
        <button class="mx-1">
          <v-icon class="text-icon" @click="work" type="mdi" :path="mdiChartBox"></v-icon>
        </button>
        <button class="">
          <v-icon class="text-icon" type="mdi" :path="mdiCog"></v-icon>
        </button>
      </div>

    </div>
  </header>
  <dialog id="modal"
    class="w-36 px-3 py-2 backdrop:opacity-70  backdrop:bg-primary rounded shadow-md shadow-black -translate-y-28">
    <div class="border">
      <div class="border border-red-500 mb-5">
        <h4>İstatistik</h4>
      </div>
      <div class="border border-blue-500">
        <div>
          <div class="flex">
            <div>0</div>
            <div class="bg-red-500">
              <div>2</div>
            </div>
          </div>
          <div class="flex">
            <div>1</div>
            <div class="bg-red-500">
              <div>2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <form method="dialog" class="text-right">
      <button class="p-1 rounded bg-red-800">Close</button>
    </form>
  </dialog>
</template>



<script setup>
import { mdiInformation, mdiCog, mdiChartBox, mdiAlphaW } from '@mdi/js';

function work() {
  const modal = document.querySelector("#modal")

  modal.showModal()
  console.log("hello");
}




</script>