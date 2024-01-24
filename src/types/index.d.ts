interface IGlobal {
    id?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
}
interface IUniteEnseignement extends IGlobal {
    codeUE: string;
    designation: string;
    credit: string;
    semetre: string;
}

interface IUser extends IGlobal {
    nom: string;
    email: string;
    password: string;
}