import express from "express";
import CarRouter from "./CarRouter.js";
import ServiceRouter from "./ServiceRouter.js";
import PartRouter from "./PartRouter.js";
import OrderRouter from "./OrderRouter.js";

const router = express.Router();
router.use('/cars', CarRouter);
router.use('/services', ServiceRouter);
router.use('/parts', PartRouter);
router.use('/orders', OrderRouter);

export default router;
