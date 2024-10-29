interface Session{
    session: string | null;
    result: boolean;
    description: string | null;
    userData: {
        id: number;
        nome: string;
        cognome: string;
        gender: string;
        creationDate: Date | null;
        mail: string
        isAdmin: boolean
    } | null;
}