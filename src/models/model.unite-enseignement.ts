import { DataTypes } from 'sequelize';
import { connect } from '../databases/connecte'
const UniteEnseignement = connect.define('uniteE', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    designation: {
        type: DataTypes.STRING,
    }
}, { paranoid: true });

export { UniteEnseignement }