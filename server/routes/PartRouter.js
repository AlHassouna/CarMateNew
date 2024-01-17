import BaseRouter from './BaseRouter.js';
import Part from '../models/Part.js';

class PartRouter extends BaseRouter {
    constructor() {
        super(Part);
    }

    async getAll(req, res) {
        try {
            const parts = await this.model.find({}).populate('car');
            res.send(parts);
        } catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        }
    }
}

export default new PartRouter().router;
