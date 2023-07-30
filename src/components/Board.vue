<template>
  <main class="flex justify-center mt-5 sm:mt-10">
    <div class="grid grid-rows-6 grid-cols-5 gap-x-2 gap-y-2 ">
      <h2 class="boardItem"></h2>
    </div>
  </main>
</template>


<script setup>
import { onMounted, watch } from 'vue';

const props = defineProps(
  {
    words: Array,
    word: Array,
    tryCounter: Number
  }
)
</script>