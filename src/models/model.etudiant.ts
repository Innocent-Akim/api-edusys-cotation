import { DataTypes } from 'sequelize';
import { connect } from '../databases/connecte'
const Etudiants = connect.define('etudiant', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    matricule: DataTypes.STRING,

    nom: DataTypes.STRING,
    postnom: DataTypes.STRING,
    prenom: DataTypes.STRING,


}, { paranoid: true });

export { Etudiants }