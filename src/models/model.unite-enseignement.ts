import { DataTypes, Model } from 'sequelize';
import { connect } from '../databases/connecte'


interface IUnEnseignement extends Model<IUniteEnseignement>, IUniteEnseignement { }
const UniteEnseignement = connect.define<IUnEnseignement>('uniteE', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    codeUE: DataTypes.STRING,
    designation: DataTypes.STRING,
    credit: DataTypes.STRING,
    semetre: DataTypes.STRING,
}, { paranoid: true });

export { UniteEnseignement }