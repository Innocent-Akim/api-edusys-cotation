import { DataTypes } from 'sequelize';
import { connect } from '../databases/connecte'
const Verification = connect.define('semestre', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    designation: DataTypes.STRING,
}, { paranoid: true });

export { Verification }