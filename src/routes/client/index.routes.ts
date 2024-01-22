import * as controler from '../../controller'
import { Router } from 'express'

export default (router: Router) => {
    router.post('/client/add', controler.client.createClient);
    router.get('/client', controler.client.findAllClient);
    router.delete('/client/delete', controler.client.deleteClient);
    router.patch('/client/update', controler.client.updateClient);
}