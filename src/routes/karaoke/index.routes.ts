import * as controler from '../../controller'
import { Router } from 'express'

export default (router: Router) => {
    router.post('/karaoke/add', controler.karaoke.createKaraoke);
    router.get('/karaoke', controler.karaoke.findAllKaraoke);
    router.delete('/karaoke/delete', controler.karaoke.deleteKaraoke);
    router.patch('/karaoke/update', controler.karaoke.updateKaraoke);
}