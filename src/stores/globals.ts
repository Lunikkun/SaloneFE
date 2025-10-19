import { ref, watch } from 'vue'
import type { Session } from '@/interfaces/Session'
import type { Service } from '@/interfaces/Service'
import type { StaffMember } from '@/interfaces/StaffMember'

export const session = ref<Session | undefined>()
export const loginPanelOpened = ref(false)
export const registerPanelOpened = ref(false)
export const resetPasswordPanelOpened = ref(false)
export const resetPasswordPanelApplyOpened = ref(false)
export const resetToken = ref()
export const servicesData = ref<Service[] | undefined>()
export const staffData = ref<StaffMember[] | undefined>()
export const review = ref()
export const errors = ref()
watch(session, () => console.log(session.value))
