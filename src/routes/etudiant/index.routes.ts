import * as controler from '../../controller'
import { Router } from 'express'
export default (router: Router) => {
    router.post('/etudiant/add', controler.instanceEtudiant.create);
    router.get('/etudiant', controler.instanceEtudiant.find);
    // router.patch('/etudiant/update', controler.instanceIniteUE.updateUE);
    // router.patch('/etudiant/delete', controler.instanceIniteUE.deleteUE);
}