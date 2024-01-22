import { Sequelize } from "sequelize";
import Database from "./database";

const database = Database.getInstance();

export const connect = new Sequelize(
    database.dbName,
    database.username,
    database.password,
    {
        host: database.host,
        dialect: "mysql",
        logging: database.logging,
    }
);
connect
    .authenticate()
    .then(() => {
        console.log("Connected...");
    })
    .catch((error) => {
        console.log(`Failed to connect... ${error}`);
    });
