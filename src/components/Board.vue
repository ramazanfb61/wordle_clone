<template>
  <main class="flex justify-center mt-5 sm:mt-10">
    <div class="grid grid-rows-6 gap-y-2 ">
      <h1 class="grid grid-cols-5 gap-x-2">
        <template v-if="props.tryCounter === 1" class="boardItem">
          <div v-for="a in 5">
            {{ props.word[a] }}
          </div>
        </template>
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