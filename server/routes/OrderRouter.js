import BaseRouter from "./BaseRouter.js";
import Order from "../models/Order.js";

class OrderRouter extends BaseRouter {
  constructor() {
    super(Order);
  }

  async getAll(req, res) {
    try {
      const orders = await this.model.find({}).populate([
        {
          path: "carParts",
          populate: { path: "item", model: "Part" },
        },
        {
          path: "carServices",
          populate: { path: "item", model: "Service" },
        },
      ]);
      res.send(orders);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async getOne(req, res) {
    const id = req.params.id;
    try {
      const order = await this.model.findById(id).populate([
        {
          path: "carParts",
          populate: { path: "item", model: "Part" },
        },
        {
          path: "carServices",
          populate: { path: "item", model: "Service" },
        },
      ]);
      res.send(order);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }
}

export default new OrderRouter().router;
