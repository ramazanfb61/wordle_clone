<script setup>
import { mdiAbacus } from '@mdi/js';
import { ref } from "vue"

import Header from "./components/Header.vue"
import Board from './components/Board.vue';
import Keyboard from "./components/Keyboard.vue"


const word = ref([])
const words = ref([])
const tryCounter = ref(0)

</script>

<template>
  <Header></Header>
  <Board    :word="word" :words="words" />
  <Keyboard :word="word" :words="words" />
</template>

<style scoped>

</style>