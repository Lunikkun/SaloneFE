<script setup lang="ts">
import type { Service } from '@/interfaces/Service'
import { servicesData } from '@/stores/globals'
import { onMounted, ref, computed, watch } from 'vue'

function toDatetimeLocal(d: Date) {
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`
}

function toDateString(d: Date) {
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

function roundMinutesTo15(d: Date) {
  const date = new Date(d)
  const mins = date.getMinutes()
  const rounded = Math.ceil(mins / 15) * 15
  date.setSeconds(0, 0)
  if (rounded === 60) {
    date.setHours(date.getHours() + 1)
    date.setMinutes(0)
  } else {
    date.setMinutes(rounded)
  }
  return date
}

const selectedDay = ref<string>(toDateString(new Date()))
const selectedTime = ref<string>(toDatetimeLocal(roundMinutesTo15(new Date())).slice(11, 16))

// servizio selezionato e note opzionali
const selectedServiceId = ref<number | null>(null)
const notes = ref<string>('')
const loading = ref(false)
const errorMessage = ref<string | null>(null)
const successMessage = ref<string | null>(null)

const todayDate = toDateString(new Date())

const openingHour = 9
const closingHour = 18

function generateTimeSlots(openH: number, closeH: number) {
  const slots: string[] = []
  for (let h = openH; h < closeH; h++) {
    for (let m = 0; m < 60; m += 15) {
      const hh = String(h).padStart(2, '0')
      const mm = String(m).padStart(2, '0')
      slots.push(`${hh}:${mm}`)
    }
  }
  return slots
}

const allSlots = generateTimeSlots(openingHour, closingHour)

const availableSlots = computed(() => {
  if (selectedDay.value === todayDate) {
    const next = roundMinutesTo15(new Date())
    const minTime = `${String(next.getHours()).padStart(2, '0')}:${String(next.getMinutes()).padStart(2, '0')}`
    return allSlots.filter((s) => s >= minTime)
  }
  return allSlots
})

const selectedDateTime = computed(() => `${selectedDay.value}T${selectedTime.value}`)

watch(
  availableSlots,
  (slots) => {
    if (slots && slots.length > 0) {
      if (!selectedTime.value || !slots.includes(selectedTime.value)) {
        selectedTime.value = slots[0]
      }
    }
  },
  { immediate: true }
)

async function submitReservation() {
  errorMessage.value = null
  successMessage.value = null
  if (!selectedServiceId.value) {
    errorMessage.value = 'Seleziona un servizio.'
    return
  }
  if (!selectedDay.value || !selectedTime.value) {
    errorMessage.value = 'Seleziona data e ora.'
    return
  }

  loading.value = true
  try {
    const payload = {
      id_servizio: selectedServiceId.value,
      data_prenotazione: selectedDateTime.value,
      notes: notes.value || null
    }

    const res = await fetch('http://127.0.0.1:3000/user/prenota', {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    const data = await JSON.parse(await res.text())
    if (res.ok) {
      successMessage.value = 'Prenotazione inviata con successo.'
      // opzionale: reset campi
      notes.value = ''
    } else {
      errorMessage.value = data?.error || data?.message || "Errore durante l'invio."
    }
  } catch (e) {
    errorMessage.value = String(e)
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  if (!servicesData.value || servicesData.value.length === 0) {
    const result = await fetch('http://127.0.0.1:3000/servizi', {
      mode: 'cors',
      credentials: 'include',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    servicesData.value = (await JSON.parse(await result.text())) as Service[]
  }
})
</script>

<template>
  <div class="flex flex-row border-4 border-red-1000">
    <div class="flex flex-row items-center gap-4">
      <input type="date" v-model="selectedDay" :min="todayDate" />
      <select v-model="selectedTime">
        <option v-for="slot in availableSlots" :key="slot" :value="slot">{{ slot }}</option>
      </select>
    </div>
    <div class="flex flex-col">
      <select name="serviceSelection" id="serviceSelection" v-model="selectedServiceId">
        <option :value="null" disabled selected>Seleziona un servizio</option>
        <option v-for="elem in servicesData" :key="elem.id" :value="elem.id">
          {{ elem.nome }}
        </option>
      </select>
      <textarea
        v-model="notes"
        placeholder="Note aggiuntive (opzionali)"
        class="mt-2 p-2 border rounded"
      />
      <button
        class="border self-center font-fanwood text-white bg-black rounded-full py-2 w-[12em] text-sm m-4"
        @click="submitReservation"
        :disabled="loading"
      >
        <span v-if="loading">Invio...</span>
        <span v-else>CONFERMA</span>
      </button>
      Selezionato: {{ selectedDateTime }}
      <div class="text-red-500 font-bold" v-if="errorMessage">{{ errorMessage }}</div>
      <div class="text-green-600 font-bold" v-if="successMessage">{{ successMessage }}</div>
    </div>
  </div>
</template>
