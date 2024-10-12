<script setup lang="ts">
import { session } from '@/stores/globals'
import AccountInfo from './PrivateAreaPages/AccountInfoPage.vue'
import BookReservationPage from './PrivateAreaPages/BookReservationPage.vue'
import CheckReservationsPage from './PrivateAreaPages/CheckReservationsPage.vue'
import ReviewPage from './PrivateAreaPages/ReviewPage.vue'
import { markRaw, ref, shallowRef, type Component } from 'vue'
import AccountInfoPage from './PrivateAreaPages/AccountInfoPage.vue'

const activeComponent = ref<Component>(markRaw(AccountInfoPage));

function setActiveComponent(component: Component) {
  activeComponent.value = markRaw(component);
}

</script>
<template>
  <p v-if="session === undefined" class="font-hubballi text-6xl">LOGIN NON AVVENUTO</p>
  <div
    v-else
    class="flex border-2 sm:flex-row flex-col font-hubballi justify-between items-center py-4"
  >
    <div class="flex flex-col gap-y-6">
      <!--DOVREBBE ESSERE sm:rounded-r-md, il bordo DESTRO arrotondato, però come vuoi tu Tailwind!-->
      <button
        class="bg-white text-black w-48 text-sm p-2 text-center font-fanwood h-auto rounded-full sm:rounded-l-md shadow-lg shadow-gray-500"
        @click="setActiveComponent(AccountInfoPage)"
      >
        ACCOUNT
      </button>
      <button
        class="bg-white text-black w-48 text-sm p-2 text-center font-fanwood h-auto rounded-full sm:rounded-l-md shadow-lg shadow-gray-500"
        @click="setActiveComponent(BookReservationPage)"
      >
        PRENOTA
      </button>
      <button
        class="bg-white text-black w-48 text-sm p-2 text-center font-fanwood h-auto rounded-full sm:rounded-l-md shadow-lg shadow-gray-500"
        @click="setActiveComponent(CheckReservationsPage)"
      >
        LISTA PRENOTAZIONI
      </button>
      <button
        class="bg-white text-black w-48 text-sm p-2 text-center font-fanwood h-auto rounded-full sm:rounded-l-md shadow-lg shadow-gray-500"
        @click="setActiveComponent(ReviewPage)"
      >
        RECENSISCI
      </button>
    </div>
    <div
      class="flex justify-around items-center w-[90vw] sm:w-[50vw] h-auto sm:h-[40vh] border-2 bg-white shadow-lg shadow-gray-500 rounded-t-[50px] sm:rounded-tr-[0] sm:rounded-l-[50px] mt-12 sm:mt-0"
    >
      <component :is="activeComponent" />
    </div>
  </div>
</template>
