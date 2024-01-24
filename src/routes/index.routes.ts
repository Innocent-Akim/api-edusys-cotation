import { Router } from "express";
import ueRoutes from './ue/index.routes';
import userRoutes from './user/index.routes';


const router = Router();
ueRoutes(router);
userRoutes(router);
export default router;
