import { DataTypes, Model } from 'sequelize';
import { connect } from '../databases/connecte'

export interface ModelInscription extends Model<IInscription>, IInscription { }
const Inscription = connect.define<ModelInscription>('inscription', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    dateInscription: DataTypes.STRING,
    annee: DataTypes.STRING,
}, { paranoid: true });

export { Inscription }