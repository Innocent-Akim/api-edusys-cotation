import { Router } from "express";
import ueRoutes from './ue/index.routes';
import userRoutes from './user/index.routes';
import etudiantRoutes from './etudiant/index.routes';
import verificationRoutes from './verif/index.routes';


const router = Router();
ueRoutes(router);
userRoutes(router);
etudiantRoutes(router);
verificationRoutes(router);

export default router;
