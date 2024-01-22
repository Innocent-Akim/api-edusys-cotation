export interface IGlobal {
    id?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
}

export interface IAction extends IGlobal {
    formule: string;
    boisson: string;
    image: string;
    evenementId?: number;
}

export interface IAgence extends IGlobal {
    nom: string;
    adresse: string;
    longitude: string;
    latitude: string;
    phone: string;
    mail: string;
    dateExpiration: string;
    password?: string;
}

export interface IChanson extends IGlobal {
    titre: string;
    artiste: string;
    karaokeId?: number;
}

export interface IClient extends IGlobal {
    fullname: string;
    sexe: string;
    phone: string;
    mail: string;
}

export interface IEvenement extends IGlobal {
    typeEvent?: string;
    dateDebut?: string;
    dateFin?: string;
    is_active?: boolean;
    agenceId?: number;
}

export interface IFood extends IGlobal {
    designation: string;
    prix: string;
    image: string;
    is_active: boolean;
    evenementId?: number;
}

export interface IKaraoke extends IGlobal {
    artiste: string;
    longitude: string;
    latitude: string;
    image?: string;
    evenementId?: number;
}

export interface IParticipation extends IGlobal {
    dateParticipation: string;
}

export interface IPublicite extends IGlobal {
    dateDebut: string;
    dateFin: string;
    is_active: boolean;
    titre: string;
    level: string;
    image?: string;
}