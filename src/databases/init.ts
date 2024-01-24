import { connect } from "./connecte";
import * as model from "../models";


const initialize = () => {
    model.Etudiants.hasMany(model.Inscription);
    model.Inscription.belongsTo(model.Etudiants);

    model.UniteEnseignement.hasMany(model.Verification);
    model.Verification.belongsTo(model.UniteEnseignement);

    model.Inscription.hasMany(model.Verification);
    model.Verification.belongsTo(model.Inscription);

    connect
        .sync({ alter: true })
        .then(() => {
            console.log("All models were synchronized successfully.");
        })
        .catch((error) => {
            console.log(`Failed to sync all models${error.message}`);
        });
};
export { initialize };
