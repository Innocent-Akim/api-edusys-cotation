import { DataTypes } from 'sequelize';
import { connect } from '../databases/connecte'
const Verification = connect.define('verification', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    dateInscription: DataTypes.DATE,
    is_active: DataTypes.BOOLEAN,
}, { paranoid: true });

export { Verification }