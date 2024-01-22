import { Router } from "express";
import actionRoutes from './action/index.routes'
import agenceRoutes from './agence/index.routes'
import clientRoutes from './client/index.routes'
import foodRoutes from './food/index.routes'
import karaokeRoutes from './karaoke/index.routes'
import publicteRoutes from './publicite/index.routes'

const router = Router();

actionRoutes(router)
agenceRoutes(router)
clientRoutes(router)
foodRoutes(router)
karaokeRoutes(router);
publicteRoutes(router);


export default router;
