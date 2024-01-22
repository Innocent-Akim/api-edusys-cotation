import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import * as dotenv from 'dotenv'
import { initialize } from "../databases/init";
import router from "../routes/index.routes";
import { HttpStatusCode } from "../enum/httpStatusCode";
import { sendFeedbackDestroyFacture } from "views/nodemail";
dotenv.config();
const port = process.env.PORT || 8001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use((req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, PATCH, POST, DELETE, GET");
        res.status(200).json({});
    }
    next();
});
app.use("/action/api/v1/", router);
app.use((req, res, next) => {
    res.status(HttpStatusCode.NotFound).json({ msg: "Not Found" })
})
initialize();

app.listen(port, () => {
    console.log("***************************************************");
    console.log("***************************************************");
    console.log("***************************************************");
    console.log(`<========== RUNNING TEST APP ON ${port} ==========>`);
    console.log("***************************************************");
    console.log("***************************************************");
    console.log("***************************************************");
});

