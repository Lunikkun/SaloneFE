import { ref, watch } from "vue";

export const session = ref()
export const loginPanelOpened = ref(false)
export const registerPanelOpened = ref(false)
export const resetPasswordPanelOpened = ref(false)
export const resetPasswordPanelApplyOpened = ref(false)
export const resetToken = ref()
watch(session, ()=>console.log(session.value))