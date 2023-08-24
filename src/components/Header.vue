<template>
  <header class="border-b border-primary p-2">
    <div class="flex justify-between">
      <div>
        <v-icon class="text-green-700" :size="32" type="mdi" :path="mdiAlphaW"></v-icon>
      </div>
      <h2 class="font-semibold text-xl translate-x-6">Lettertl</h2>
      <div class="flex">
        <button class="">
          <v-icon class="text-icon"  type="mdi" :path="mdiInformation"></v-icon>
        </button>
        <button class="mx-1">
          <v-icon class="text-icon"  type="mdi" :path="mdiChartBox"></v-icon>
        </button>
        <button class="">
          <v-icon class="text-icon"  type="mdi" :path="mdiCog "></v-icon>
        </button>
      </div>
      
    </div>
  </header>
</template>



<script setup>
import { mdiInformation,mdiCog,mdiChartBox,mdiAlphaW} from '@mdi/js';


</script>