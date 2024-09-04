import { ref, watch } from "vue";

export const session = ref()
export const loginPanelOpened = ref(false)
export const registerPanelOpened = ref(false)


watch(session, ()=>console.log(session.value))