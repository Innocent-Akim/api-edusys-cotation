import { hash, compare } from "bcrypt";
import dayjs from "dayjs";

export const initHash = async (password: string) => {
    return await hash(password, 10);
};

export const initCompare = async (pwd: string, passwordHash: string) => {
    return await compare(pwd, passwordHash);
};


export const genererMotDePasseEntier = (longueur: number): string => {
    const chiffres = '0123456789';
    let motDePasse = '';
    for (let i = 0; i < longueur; i++) {
        const indiceAleatoire = Math.floor(Math.random() * chiffres.length);
        motDePasse += chiffres.charAt(indiceAleatoire);
    }
    return motDePasse;
};

export const anneeAcademic = (semestre: number) => {
    switch (semestre) {
        case 1:
            return dayjs().format('YYYY');
    }
}