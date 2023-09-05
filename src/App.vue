<script setup>
import Header from   "./components/Header.vue"
import { onMounted, ref, watch } from "vue";
import { router } from "./router"

const theUrl = ref(router.currentRoute.value.path)



</script>

<template>
  <Header></Header>
  <RouterView></RouterView>
</template> 

<style scoped>

</style>