import { DataTypes, Model, Optional } from "sequelize";
import { sequelizeConnection } from "../../config/connection";

interface APenduduk {
    id?: number;
    name?: string;
    birthplace?: string;
    date_of_birth?: string;
    identity_number?: number;
    gender?: string;
    address?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface InPenduduk extends Optional<APenduduk, "id"> {}
export interface OutPenduduk extends Required<APenduduk> {}

export default class Penduduk extends Model<APenduduk, InPenduduk> implements APenduduk {
    public id!: number;
    public name!: string;
    public birthplace!: string;
    public date_of_birth!: string;
    public identity_number!: number;
    public gender!: string;
    public address!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Penduduk.init({
    id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    birthplace: {
        allowNull: false,
        type: DataTypes.STRING
    },
    date_of_birth: {
        allowNull: false,
        type: DataTypes.STRING
    },
    identity_number: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    gender: {
        allowNull: false,
        type: DataTypes.STRING
    },
    address: {
        allowNull: false,
        type: DataTypes.STRING
    }
}, {
    timestamps: true,
    sequelize: sequelizeConnection,
});