<script setup lang="ts">
import { ref } from 'vue'
interface Star{
    value: number,
    color: string 
}
const stars = ref<Star[]>([
    {value:1, color: "#FFFFFF"},
    {value:2, color: "#FFFFFF"},
    {value:3, color: "#FFFFFF"},
    {value:4, color: "#FFFFFF"},
    {value:5, color: "#FFFFFF"},
])
const reviewToSend = ref<string>(); reviewToSend.value = ""
const rate = ref<number>(); rate.value = 1
async function sendReview(voto: number | undefined, review: string | undefined) {
  if (!review || !voto) {
    alert('Recensione vuota')
    return
  } else
    await fetch('http://127.0.0.1:3000/user/recensione', {
      credentials: 'include',
      method: 'POST',
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify({ recensione: review, voto: voto })
    })
}

function starRate(value:number) {
    stars.value.forEach((star)=>{
        star.color = "#FFFFFF"
    })
    console.log(value)
    console.log(rate.value)
    rate.value = value
    for(let i=0;i<rate.value;i++)
        stars.value[i].color = "#FFBF00"
    reviewToSend.value = ""
    rate.value = 1
}
</script>
<template>
  <div class="flex flex-col items-center justify-center gap-y-2">
    <textarea
      class="w-[40vw] h-[20vh]"
      placeholder="Scrivi qui la tua recensione"
      v-model="reviewToSend"
    ></textarea>
    <div class="flex">
      <div v-for="star in stars" :key="star.value" @click="starRate(star.value)">
        <svg
              class="inline"
              width="50px"
              height="50px"
              viewBox="0 0 25 25"
              :fill="star.color"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 4L15.2747 9.8691L21.5595 10.2188L16.6806 14.1959L18.2901 20.2812L13 16.87L7.70993 20.2812L9.31941 14.1959L4.44049 10.2188L10.7253 9.8691L13 4Z"
                stroke="#121923"
                stroke-width="1.2"
              />
            </svg>
      </div>
    </div>
    <button
      @click="sendReview(rate, reviewToSend)"
      class="border font-fanwood text-white bg-black rounded-full py-2 w-[12em] text-sm mt-2"
    >
      CONFERMA
    </button>
  </div>
</template>
