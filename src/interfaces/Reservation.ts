export default interface Reservation{
    id: number,
    user_id: number,
    service_name: string,
    data_prenotazione: Date
    durata: number,
    note: string | null
    staff_name: string
}