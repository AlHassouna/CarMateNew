import express from "express";
import Car from "../models/Car.js";
import Service from "../models/Service.js";
import Part from "../models/Part.js";
import Order from "../models/Order.js";
import User from "../models/User.js";

const router = express.Router();

router.get("/cars", async (req, res) => {
  try {
    const car = await Car.find({});
    res.send(car);
  } catch (error) {
    console.log(error);
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    console.log(error);
  }
});

router.get("/services", async (req, res) => {
  try {
    const services = await Service.find({});
    res.send(services);
  } catch (error) {
    console.log(error);
  }
});

router.post("/services", async (req, res) => {
  const service = req.body;
  try {
    const newService = await Service.create(service);
    const services = await Service.find({});
    res.send(services);
  } catch (error) {
    console.log(error);
  }
});

router.get("/parts", async (req, res) => {
  try {
    const parts = await Part.find({});
    res.send(parts);
  } catch (error) {
    console.log(error);
  }
});

router.get("/orders", async (req, res) => {
  try {
    const parts = await Order.find({});
    res.send(parts);
  } catch (error) {
    console.log(error);
  }
});

// router.get("/cart", async (req, res) => {
//   try {
//     const cart = await CartModel.find({});
//     res.send(cart);
//   } catch (error) {
//     console.log(error);
//   }
// });

// router.post("/cart", async (req, res) => {
//   const cart = req.body;
//   try {
//     const newCart = await CartModel.create(cart);
//     const cart = await CartModel.find({});
//     res.send(cart);
//   } catch (error) {
//     console.log(error);
//   }
// });

export default router;
