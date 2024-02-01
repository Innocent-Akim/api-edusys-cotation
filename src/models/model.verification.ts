import { DataTypes, Model } from 'sequelize';
import { connect } from '../databases/connecte'

export interface ModelVerification extends Model<IVerification>, IVerification { }
const Verification = connect.define<ModelVerification>('verification', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    dateInscription: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
}, { paranoid: true });

export { Verification }