import { DataTypes, Model } from 'sequelize';
import { connect } from '../databases/connecte'

interface IModalUser extends Model<IUser>, IUser { }

const User = connect.define<IModalUser>('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nom: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
}, { paranoid: true });

export { User }