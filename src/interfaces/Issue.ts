interface Issue {
  validation?: string // Opzionale, perché non è presente in tutti gli oggetti
  code: string
  message: string
  path: string[]
  minimum?: number // Opzionale, poiché non sempre presente
  type?: string // Opzionale
  inclusive?: boolean // Opzionale
  exact?: boolean // Opzionale
}
