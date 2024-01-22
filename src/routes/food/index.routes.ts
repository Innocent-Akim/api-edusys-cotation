import * as controler from '../../controller'
import { Router } from 'express'

export default (router: Router) => {
    router.post('/food/add', controler.food.createFood);
    router.get('/food', controler.food.findAllFood);
    router.delete('/food/delete', controler.food.deleteFood);
    router.patch('/food/update', controler.food.updateFood);
}