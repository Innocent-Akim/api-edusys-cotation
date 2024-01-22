import { connect } from "./connecte";
import * as model from "../models";


const initialize = () => {



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
