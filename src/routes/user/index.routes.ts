import * as controler from '../../controller'
import { Router } from 'express'

export default (router: Router) => {
    router.post('/user/login', controler.instanceUser.authUser);
    router.post('/user', controler.instanceUser.findAllUser);
    router.post('/user/add', controler.instanceUser.createUser)


}