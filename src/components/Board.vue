<template>
  <main class="flex justify-center mt-5 sm:mt-10">
    <div class="grid grid-rows-6 grid-cols-5 gap-x-2 gap-y-2 ">
      <template v-for="a in 2">
        <template v-if="props.words[a]">
          <div v-for="word in  props.words[a]" class="boardItem">if {{ word }}</div>
        </template>
        <template v-else>
          <div v-for="word in props.word" class="boardItem">{{ word }}</div>
        </template>
      </template>
      <!-- <div class="boardItem">{{ props.words[1] ? props.words : props.word[0] }}</div> -->
      <!-- <div class="boardItem">{{ props.words[1] ? props.words : props.word[1] }}</div> -->
      <!-- <div class="boardItem">{{ props.words[1] ? props.words : props.word[2] }}</div> -->
      <!-- <div class="boardItem">{{ props.words[1] ? props.words : props.word[3] }}</div> -->
      <!-- <div class="boardItem">{{ props.words[1] ? props.words : props.word[4] }}</div> -->
      <!-- <div class="boardItem">{{ props.words[2] ? props.words : props.word[0] }}</div> -->
      <!-- <div class="boardItem">{{ props.words[2] ? props.words : props.word[1] }}</div> -->
      <!-- <div class="boardItem">{{ props.words[2] ? props.words : props.word[2] }}</div> -->
      <!-- <div class="boardItem">{{ props.words[2] ? props.words : props.word[3] }}</div> -->
      <!-- <div class="boardItem">{{ props.words[2] ? props.words : props.word[4] }}</div> -->
      <!-- <div class="boardItem">{{ props.words[3] ? props.words : props.word[0] }}</div> -->
      <!-- <div class="boardItem">{{ props.words[3] ? props.words : props.word[1] }}</div> -->
      <!-- <div class="boardItem">{{ props.words[3] ? props.words : props.word[2] }}</div> -->
      <!-- <div class="boardItem">{{ props.words[3] ? props.words : props.word[3] }}</div> -->
      <!-- <div class="boardItem">{{ props.words[3] ? props.words : props.word[4] }}</div> -->
      <!-- <div class="boardItem">{{ props.words[4] ? props.words : props.word[0] }}</div> -->
      <!-- <div class="boardItem">{{ props.words[4] ? props.words : props.word[1] }}</div> -->
      <!-- <div class="boardItem">{{ props.words[4] ? props.words : props.word[2] }}</div> -->
      <!-- <div class="boardItem">{{ props.words[4] ? props.words : props.word[3] }}</div> -->
      <!-- <div class="boardItem">{{ props.words[4] ? props.words : props.word[4] }}</div> -->
      <!-- <div class="boardItem">{{ props.words[5] ? props.words : props.word[0] }}</div> -->
      <!-- <div class="boardItem">{{ props.words[5] ? props.words : props.word[1] }}</div> -->
      <!-- <div class="boardItem">{{ props.words[5] ? props.words : props.word[2] }}</div> -->
      <!-- <div class="boardItem">{{ props.words[5] ? props.words : props.word[3] }}</div> -->
      <!-- <div class="boardItem">{{ props.words[5] ? props.words : props.word[4] }}</div> -->
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