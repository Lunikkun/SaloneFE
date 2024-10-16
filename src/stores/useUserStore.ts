import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'

interface IUser {
  id: number
  nome: string
  cognome: string
  mail: string
  password: string
  gender: boolean
  creation_date: Date | null
  is_admin: boolean | null
}

export default defineStore('useUserStore', async () => {
  /* 
    -> IUser data
    -> null - user is not loggedin 
    -> undefined - user fetching still ongoing
  */
  const user = ref<IUser | null | undefined>(undefined)

  /* load initial user data, null if not logged in */
  onMounted(async () => {
    const res = await fetch('http://127.0.0.1/dsajdkajdskads').then((r) => r.json())
    if (res) user.value = res
  })

  async function signin() {}

  async function signup() {}

  async function signout() {}

  return {
    user,
    signin,
    signup,
    signout
  }
})
