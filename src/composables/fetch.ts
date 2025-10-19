import type { ErrorRegistration } from "@/interfaces/ErrorRegistration"
import { errors, registerPanelOpened, session } from "@/stores/globals"

export async function login(mail: string, password: string) {
    const result = await fetch('http://127.0.0.1:3000/login', {
        mode: 'cors',
        credentials: 'include',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: mail, password })
    })
    const res = await JSON.parse(await result.text())
    if (res.session === undefined) errors.value = res.error
    else errors.value = undefined
    if (res.session !== null) session.value = res
    else session.value = undefined
    return res
}

export async function register(
  email: string,
  nome: string,
  cognome: string,
  pw: string,
  pw2: string,
  gender: boolean
) {
  const queryResult: ErrorRegistration = { success: true, error: { name: '', issues: [] } }
  if (pw === pw2) {
    const result = await fetch('http://127.0.0.1:3000/register', {
      mode: 'cors',
      credentials: 'include',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, nome, cognome, password: pw, isMale: gender })
    })
    if(result.ok) {
        login(email, pw); 
        registerPanelOpened.value=false
    }
    //PUO CONTENERE ERRORE DI ZOD
    const value: ErrorRegistration = JSON.parse(await result.text())
    queryResult.success = value.success
    queryResult.error = value.error
    errors.value = queryResult.error.issues.map((issue) => issue.message)
    console.log(queryResult)
  }else{
    errors.value.push("Le password non corrispondono");
  }
}