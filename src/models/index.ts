
import { Op } from 'sequelize';
import * as connect from '../databases/connecte'
import { Etudiants } from './model.etudiant';
import { Inscription } from './model.inscription';
import { Verification } from './model.verification';
import { UniteEnseignement } from './model.unite-enseignement';
import { Semestre } from './model.semestres';
import { User } from './model.user';

export {
    connect,
    Op,
    Etudiants,
    Inscription,
    Verification,
    UniteEnseignement,
    Semestre,
    User

}
