export default interface Reservation{
    id: number,
    service_name: string,
    data: Date
    durata_servizio: number,
    note: string | null
}