import * as controler from '../../controller'
import { Router } from 'express'

export default (router: Router) => {
    router.post('/ue/add', controler.instanceIniteUE.createUE);
    router.get('/ue', controler.instanceIniteUE.findAllUE);
    router.patch('/ue/update', controler.instanceIniteUE.updateUE);


}