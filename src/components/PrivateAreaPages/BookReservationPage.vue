<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { servicesData, staffData } from '@/stores/globals'

// ---------------------------
// Utility date
// ---------------------------
function toDateString(d: Date) {
  return d.toISOString().split('T')[0]
}

function roundMinutesTo15(d: Date) {
  const date = new Date(d)
  const mins = date.getMinutes()
  const rounded = Math.ceil(mins / 15) * 15
  if (rounded === 60) {
    date.setHours(date.getHours() + 1, 0, 0, 0)
  } else {
    date.setMinutes(rounded, 0, 0)
  }
  return date
}

// ---------------------------
// Variabili principali
// ---------------------------
const selectedDay = ref(toDateString(new Date()))
const selectedTime = ref(roundMinutesTo15(new Date()).toTimeString().slice(0, 5))
const selectedServiceId = ref<number | null>(null)
const selectedStaffMemberId = ref<number | null>(null)
const notes = ref('')
const loading = ref(false)
const errorMessage = ref<string | null>(null)
const successMessage = ref<string | null>(null)

const todayDate = toDateString(new Date())
const openingHour = 9
const closingHour = 18

// ---------------------------
// Generazione slot
// ---------------------------
function generateTimeSlots(openH: number, closeH: number) {
  const slots: string[] = []
  for (let h = openH; h < closeH; h++) {
    for (let m = 0; m < 60; m += 15) {
      slots.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`)
    }
  }
  return slots
}
const allSlots = generateTimeSlots(openingHour, closingHour)

const availableSlots = computed(() => {
  if (selectedDay.value === todayDate) {
    const now = roundMinutesTo15(new Date())
    const minTime = now.toTimeString().slice(0, 5)
    return allSlots.filter((s) => s >= minTime)
  }
  return allSlots
})

// ---------------------------
// Prenotazioni già esistenti
// ---------------------------
const allPrenotations = ref<{ staffMember: number; data_prenotazione: string }[]>([])

onMounted(async () => {
  if (!servicesData.value?.length) {
    const res = await fetch('http://127.0.0.1:3000/servizi', { credentials: 'include' })
    servicesData.value = await res.json()
  }

  if (!staffData.value?.length) {
    const res = await fetch('http://127.0.0.1:3000/staff', { credentials: 'include' })
    staffData.value = await res.json()
  }

  const pren = await fetch('http://127.0.0.1:3000/user/prenotazioniutente', { credentials: 'include' })
  allPrenotations.value = await pren.json()
})

// ---------------------------
// Slot occupati per staff/giorno selezionato
// ---------------------------
const bookedSlots = computed(() => {
  if (!selectedDay.value || !selectedStaffMemberId.value) return []
  return allPrenotations.value
    .filter(
      (p) =>
        p.staffMember === selectedStaffMemberId.value &&
        p.data_prenotazione.startsWith(selectedDay.value)
    )
    .map((p) => p.data_prenotazione.slice(11, 16))
})

const displaySlots = computed(() =>
  availableSlots.value.map((slot) => ({
    time: slot,
    booked: bookedSlots.value.includes(slot),
  }))
)

const selectedDateTime = computed(() => `${selectedDay.value}T${selectedTime.value}`)

// ---------------------------
// Submit prenotazione
// ---------------------------
async function submitReservation() {
  errorMessage.value = successMessage.value = null
  if (!selectedServiceId.value || !selectedStaffMemberId.value) {
    errorMessage.value = 'Seleziona un servizio e un membro dello staff.'
    return
  }

  loading.value = true
  try {
    const payload = {
      id_servizio: selectedServiceId.value,
      data_prenotazione: selectedDateTime.value,
      id_staff_member: selectedStaffMemberId.value,
      notes: notes.value || null,
    }

    const res = await fetch('http://127.0.0.1:3000/user/prenota', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const data = await res.json()
    if (res.ok) {
      successMessage.value = data?.success
      notes.value = ''
      bookedSlots.value.push(selectedTime.value) // aggiorna localmente
    } else {
      errorMessage.value = data?.error || 'Errore durante la prenotazione.'
    }
  } catch (e) {
    errorMessage.value = String(e)
  } finally {
    loading.value = false
  }
}

// ---------------------------
// Aggiorna selezione orario se slot non valido
// ---------------------------
watch([availableSlots, bookedSlots], () => {
  if (!selectedTime.value || bookedSlots.value.includes(selectedTime.value)) {
    const nextAvailable = displaySlots.value.find((s) => !s.booked)
    if (nextAvailable) selectedTime.value = nextAvailable.time
  }
})
</script>

<template>
  <div class="flex flex-row gap-6 p-4">
    <div class="flex flex-col gap-3">
      <label>Data</label>
      <input type="date" v-model="selectedDay" :min="todayDate" />

      <label>Orario</label>
      <select v-model="selectedTime">
        <option
            v-for="slot in displaySlots"
            :key="slot.time"
            :value="slot.time"
            :disabled="slot.booked"
            :class="slot.booked ? 'text-gray-400 bg-gray-100' : ''"
          >
          {{ slot.time }} <span v-if="slot.booked">(occupato)</span>
        </option>
</select>

      <label>Servizio</label>
      <select v-model="selectedServiceId">
        <option :value="null" disabled>Seleziona un servizio</option>
        <option v-for="s in servicesData" :key="s.id" :value="s.id">{{ s.nome }}</option>
      </select>

      <label>Staff</label>
      <select v-model="selectedStaffMemberId">
        <option :value="null" disabled>Seleziona un impiegato</option>
        <option v-for="s in staffData" :key="s.id" :value="s.id">{{ s.nome }}</option>
      </select>

      <textarea v-model="notes" placeholder="Note aggiuntive (opzionali)" class="border p-2 rounded" />

      <button
        class="border font-fanwood text-white bg-black rounded-full py-2 w-[12em] text-sm mt-2"
        @click="submitReservation"
        :disabled="loading"
      >
        <span v-if="loading">Invio...</span>
        <span v-else>CONFERMA</span>
      </button>

      <div class="text-red-500 font-bold" v-if="errorMessage">{{ errorMessage }}</div>
      <div class="text-green-600 font-bold" v-if="successMessage">{{ successMessage }}</div>
    </div>
  </div>
</template>
