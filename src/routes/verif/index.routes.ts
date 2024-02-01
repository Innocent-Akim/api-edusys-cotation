import * as controler from '../../controller'
import { Router } from 'express'

export default (router: Router) => {
    router.post('/verif/add', controler.instanceVerifier.updateUE);
    router.get('/verif', controler.instanceVerifier.find);
    router.put('/verif/update', controler.instanceVerifier.activeUE);


}