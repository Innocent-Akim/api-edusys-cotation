import { DataTypes, Model } from 'sequelize';
import { connect } from '../databases/connecte'
export interface IModelEtudiant extends Model<IEtudiant>, IEtudiant { }

const Etudiants = connect.define<IModelEtudiant>('etudiant', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    matricule: DataTypes.STRING,
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    genre: DataTypes.STRING,
    datenaissance: DataTypes.STRING,
    categorie: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
}, { paranoid: true });

export { Etudiants }