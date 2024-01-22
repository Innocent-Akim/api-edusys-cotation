import * as controler from '../../controller'
import { Router } from 'express'

export default (router: Router) => {
    router.post('/agence/add', controler.agence.createAgence);
    router.get('/agence', controler.agence.findAllAgence);
    router.delete('/agence/delete', controler.agence.deleteAgence);
    router.patch('/agence/update', controler.agence.updateAgence);
}