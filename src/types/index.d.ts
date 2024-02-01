interface IGlobal {
    id?: number;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
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

interface IEtudiant extends IGlobal {
    matricule: string,
    nom: string,
    prenom: string,
    genre: string,
    datenaissance: string,
    categorie: string,
    phone: string,
    email: string,
    is_active: boolean,
}

interface IVerification extends IGlobal {
    dateInscription: string,
    is_active?: boolean,
    uniteEId?: number,
    inscriptionId?: number
}

interface IInscription extends IGlobal {
    dateInscription: string,
    annee: string,
    etudiantId?: number
}