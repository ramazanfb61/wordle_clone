<script setup>
import Header from   "./components/Header.vue"




</script>

<template>
  <Header v-if="$route.name ='/'"></Header>
  <RouterView></RouterView>
</template> 

<style scoped>

</style>