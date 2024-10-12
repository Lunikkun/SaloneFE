<script setup lang="ts">
import { onMounted, ref } from 'vue'

const review = ref()
const fills = ref([''])
const isDataLoaded = ref(false)
onMounted(async () => {
  let result = await fetch('http://127.0.0.1:3000/ultimarecensione')
  result = JSON.parse(await result.text())
  console.log(result)
  review.value = result
  isDataLoaded.value = true
  for (let i = 0; i < review.value.voto; i++) fills.value[i] = '#FFBF00'
})
</script>

<template>
  <div
    class="bg-black text-white flex lg:flex-row xs:flex-col sm:md:flex-col items-center justify-between lg:space-x-60"
  >
    <div v-if="isDataLoaded" class="flex items-center flex-col">
      <div class="mt-8">
        <div class="font-quando">
          <p class="text-4xl mb-2">Dicono di me</p>
        </div>
        <div class="flex self-start items-center flex-wrap">
          <p class="font-fanwood text-3xl ">{{ review.nome }}</p>
          <div class="-space-x-3 xs:justify-self-center">
            <svg
              class="inline"
              width="50px"
              height="50px"
              viewBox="0 0 25 25"
              :fill="fills[0]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 4L15.2747 9.8691L21.5595 10.2188L16.6806 14.1959L18.2901 20.2812L13 16.87L7.70993 20.2812L9.31941 14.1959L4.44049 10.2188L10.7253 9.8691L13 4Z"
                stroke="#121923"
                stroke-width="1.2"
              />
            </svg>
            <svg
              class="inline"
              width="50px"
              height="50px"
              viewBox="0 0 25 25"
              :fill="fills[1]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 4L15.2747 9.8691L21.5595 10.2188L16.6806 14.1959L18.2901 20.2812L13 16.87L7.70993 20.2812L9.31941 14.1959L4.44049 10.2188L10.7253 9.8691L13 4Z"
                stroke="#121923"
                stroke-width="1.2"
              />
            </svg>
            <svg
              class="inline"
              width="50px"
              height="50px"
              viewBox="0 0 25 25"
              :fill="fills[2]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 4L15.2747 9.8691L21.5595 10.2188L16.6806 14.1959L18.2901 20.2812L13 16.87L7.70993 20.2812L9.31941 14.1959L4.44049 10.2188L10.7253 9.8691L13 4Z"
                stroke="#121923"
                stroke-width="1.2"
              />
            </svg>
            <svg
              class="inline"
              width="50px"
              height="50px"
              viewBox="0 0 25 25"
              :fill="fills[3]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 4L15.2747 9.8691L21.5595 10.2188L16.6806 14.1959L18.2901 20.2812L13 16.87L7.70993 20.2812L9.31941 14.1959L4.44049 10.2188L10.7253 9.8691L13 4Z"
                stroke="#121923"
                stroke-width="1.2"
              />
            </svg>
            <svg
              class="inline"
              width="50px"
              height="50px"
              viewBox="0 0 25 25"
              :fill="fills[4]"
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
        <p class="font-fanwood text-xl text-wrap">{{ review.descrizione }}</p>
      </div>
    </div>
    <img
      src="/image.jpg"
      class="rounded-3xl box-content m-8 xs:w-full sm:w-full lg:w-[30vw] h-20vh"
    />
    <div
      class="lg:space-y-4 xs:space-x-4 sm:md:space-x-4 flex lg:flex-col xs:flex-row sm:md:flex-row pr-8"
    >
      <svg
        fill="#FFBF00"
        width="70px"
        height="70px"
        viewBox="0 0 24 24"
        id="gmail"
        data-name="Flat Line"
        xmlns="http://www.w3.org/2000/svg"
        class="icon flat-line pb-2"
      >
        <path
          id="secondary"
          d="M17,10.86l4-3.43V19H17Zm-10,0L3,7.43V19H7Z"
          style="fill: rgb(0, 0, 255); stroke-width: 0.5"
        ></path>
        <path
          id="primary"
          d="M17,10.86l4-3.43V19H17Zm-10,0L3,7.43V19H7ZM17,5.59h0L12,9.88,7,5.59H7A2.42,2.42,0,0,0,3,7.43H3l4,3.43,5,4.28,5-4.28,4-3.43h0A2.42,2.42,0,0,0,17,5.59Z"
          style="
            fill: none;
            stroke: rgb(255, 255, 255);
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 0.5;
          "
        ></path>
      </svg>
      <svg
        height="50px"
        width="50px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 418.135 418.135"
        xml:space="preserve"
      >
        <g>
          <path
            style="fill: #7ad06d"
            d="M198.929,0.242C88.5,5.5,1.356,97.466,1.691,208.02c0.102,33.672,8.231,65.454,22.571,93.536
		L2.245,408.429c-1.191,5.781,4.023,10.843,9.766,9.483l104.723-24.811c26.905,13.402,57.125,21.143,89.108,21.631
		c112.869,1.724,206.982-87.897,210.5-200.724C420.113,93.065,320.295-5.538,198.929,0.242z M323.886,322.197
		c-30.669,30.669-71.446,47.559-114.818,47.559c-25.396,0-49.71-5.698-72.269-16.935l-14.584-7.265l-64.206,15.212l13.515-65.607
		l-7.185-14.07c-11.711-22.935-17.649-47.736-17.649-73.713c0-43.373,16.89-84.149,47.559-114.819
		c30.395-30.395,71.837-47.56,114.822-47.56C252.443,45,293.218,61.89,323.887,92.558c30.669,30.669,47.559,71.445,47.56,114.817
		C371.446,250.361,354.281,291.803,323.886,322.197z"
          />
          <path
            style="fill: #7ad06d"
            d="M309.712,252.351l-40.169-11.534c-5.281-1.516-10.968-0.018-14.816,3.903l-9.823,10.008
		c-4.142,4.22-10.427,5.576-15.909,3.358c-19.002-7.69-58.974-43.23-69.182-61.007c-2.945-5.128-2.458-11.539,1.158-16.218
		l8.576-11.095c3.36-4.347,4.069-10.185,1.847-15.21l-16.9-38.223c-4.048-9.155-15.747-11.82-23.39-5.356
		c-11.211,9.482-24.513,23.891-26.13,39.854c-2.851,28.144,9.219,63.622,54.862,106.222c52.73,49.215,94.956,55.717,122.449,49.057
		c15.594-3.777,28.056-18.919,35.921-31.317C323.568,266.34,319.334,255.114,309.712,252.351z"
          />
        </g>
      </svg>
      <svg
        height="50px"
        width="50px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 408.788 408.788"
        xml:space="preserve"
      >
        <path
          style="fill: #475993"
          d="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085
	h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882
	v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955
	l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087
	c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085
	C408.786,24.662,384.124,0,353.701,0z"
        />
      </svg>
      <svg
        height="50px"
        width="50px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 551.034 551.034"
        xml:space="preserve"
      >
        <g id="XMLID_13_">
          <linearGradient
            id="XMLID_2_"
            gradientUnits="userSpaceOnUse"
            x1="275.517"
            y1="4.5714"
            x2="275.517"
            y2="549.7202"
            gradientTransform="matrix(1 0 0 -1 0 554)"
          >
            <stop offset="0" style="stop-color: #e09b3d" />
            <stop offset="0.3" style="stop-color: #c74c4d" />
            <stop offset="0.6" style="stop-color: #c21975" />
            <stop offset="1" style="stop-color: #7024c4" />
          </linearGradient>
          <path
            id="XMLID_17_"
            style="fill: url(#XMLID_2_)"
            d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722
		c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156
		C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156
		c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722
		c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z"
          />

          <linearGradient
            id="XMLID_3_"
            gradientUnits="userSpaceOnUse"
            x1="275.517"
            y1="4.5714"
            x2="275.517"
            y2="549.7202"
            gradientTransform="matrix(1 0 0 -1 0 554)"
          >
            <stop offset="0" style="stop-color: #e09b3d" />
            <stop offset="0.3" style="stop-color: #c74c4d" />
            <stop offset="0.6" style="stop-color: #c21975" />
            <stop offset="1" style="stop-color: #7024c4" />
          </linearGradient>
          <path
            id="XMLID_81_"
            style="fill: url(#XMLID_3_)"
            d="M275.517,133C196.933,133,133,196.933,133,275.516
		s63.933,142.517,142.517,142.517S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6
		c-48.095,0-87.083-38.988-87.083-87.083s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083
		C362.6,323.611,323.611,362.6,275.517,362.6z"
          />

          <linearGradient
            id="XMLID_4_"
            gradientUnits="userSpaceOnUse"
            x1="418.306"
            y1="4.5714"
            x2="418.306"
            y2="549.7202"
            gradientTransform="matrix(1 0 0 -1 0 554)"
          >
            <stop offset="0" style="stop-color: #e09b3d" />
            <stop offset="0.3" style="stop-color: #c74c4d" />
            <stop offset="0.6" style="stop-color: #c21975" />
            <stop offset="1" style="stop-color: #7024c4" />
          </linearGradient>
          <circle
            id="XMLID_83_"
            style="fill: url(#XMLID_4_)"
            cx="418.306"
            cy="134.072"
            r="34.149"
          />
        </g>
      </svg>
    </div>
  </div>
</template>
