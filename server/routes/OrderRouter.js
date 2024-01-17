import BaseRouter from './BaseRouter.js';
import Order from '../models/Order.js';

class OrderRouter extends BaseRouter {
    constructor() {
        super(Order);
    }

    async getAll(req, res) {
        try {
            const orders = await this.model.find({})
            res.send(orders);
        } catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        }
    }

    async getOne(req, res) {
        try {
            const orderId = req.params.id;
            const order = await this.model
                .findById(orderId)
                .populate({
                    path: 'carServices.item',
                    model: 'Service',
                })
                .exec();
            res.send(order);
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }

}


export default new OrderRouter().router;
