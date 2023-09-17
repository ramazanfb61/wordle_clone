<script setup>
import { ref } from 'vue';

const exOne = ref(["E", "L", "M", "A", "S"]);
</script>


<template>
  <div class="w-full h-full backdrop:bg-primary" >
    <div class="md:w-2/3 mx-auto mt-3">
      <div class="flex justify-between p-1">
        <div></div>
        <h3 class="text-center text-xl mb-5">Nasıl Oynanır?</h3>
        <form>
          <button class="px-1 rounded-3xl bg-gray-700">
            <router-link to="/" class="bg-inherit">X</router-link>
          </button>
        </form>
      </div>
      <div class="flex flex-col items-center">
        <div>
          <div class="my-1 mb-4">
            <p>Kelimeyi 6 denemede bulun.</p>
            <p>Her tahmin 5 harfli bir kelime olmalıdır.</p>
            <p>Her tahminden sonra kutucuğun rengi değişecektir.</p>
          </div>
          <hr />
          <h4 class="my-2">Örnekler</h4>
          <div class="my-4">
            <div class="flex my-2">
              <span
                v-for="(item, index) in exOne"
                class="boardItem"
                :class="{ 'bg-green-600': index === 0 }"
              >
                {{ item }}
              </span>
            </div>
            <p>E harfi var ve doğru yerde</p>
          </div>
          <div class="my-4">
            <div class="flex my-2">
              <span
                v-for="(item, index) in exOne"
                class="boardItem"
                :class="{ 'bg-yellow-700': index === 3 }"
              >
                {{ item }}
              </span>
            </div>
            <p>A harfi var ama yanlış yerde</p>
          </div>
          <div class="my-4">
            <div class="flex my-2">
              <span
                v-for="(item, index) in exOne"
                class="boardItem"
                :class="{ 'bg-gray-500': index === 4 }"
              >
                {{ item }}
              </span>
            </div>
            <p>S harfi yok</p>
          </div>
          <p class="mt-10">
            İyi Eğlenceler
            <a
              href="https://github.com/ramazanfb61"
              class="text-blue-500 underline"
              >@ramazanfb61</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>