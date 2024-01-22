import * as controler from '../../controller'
import { Router } from 'express'

export default (router: Router) => {
    router.post('/publicite/add', controler.publicite.createPublicite);
    router.get('/publicite', controler.publicite.findAllPublicite);
    router.delete('/publicite/delete', controler.publicite.deletePublicite);
    router.patch('/publicite/update', controler.publicite.updatePublicite);
}