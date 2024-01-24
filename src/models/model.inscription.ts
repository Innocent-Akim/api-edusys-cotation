import { DataTypes } from 'sequelize';
import { connect } from '../databases/connecte'
const Inscription = connect.define('inscription', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    dateInscription: DataTypes.STRING,
    annee: DataTypes.STRING,
}, { paranoid: true });

export { Inscription }