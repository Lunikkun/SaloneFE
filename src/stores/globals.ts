import { ref, watch } from 'vue'
import type { Session } from '@/interfaces/Session'
import type { Service } from '@/interfaces/Service'

export const session = ref<Session | undefined>()
export const loginPanelOpened = ref(false)
export const registerPanelOpened = ref(false)
export const resetPasswordPanelOpened = ref(false)
export const resetPasswordPanelApplyOpened = ref(false)
export const resetToken = ref()
export const servicesData = ref<Service[] | undefined>()
export const review = ref()
watch(session, () => console.log(session.value))
