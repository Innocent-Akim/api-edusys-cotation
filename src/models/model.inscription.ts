import { DataTypes } from 'sequelize';
import { connect } from '../databases/connecte'
const Inscription = connect.define('inscription', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    dateInscription: DataTypes.DATE,
}, { paranoid: true });

export { Inscription }