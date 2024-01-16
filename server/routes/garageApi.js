import express from 'express'

const router = express.Router()
import CarModel from '../models/Car.js'
import ServiceModel from '../models/Service.js'
import PartsModel from '../models/Parts.js'
import UserModel from '../models/User.js'
import CartModel from '../models/Cart.js'
import Cars from '../data/cars.json' with {type: "json"}
import Services from '../data/services.json' with {type: "json"}
import Parts from "../data/parts.json" with {type: "json"}

router.get('/car', async (req, res) => {
    try {
        const car = await CarModel.find({})
        console.log(car)
        res.send(car)
    } catch (error) {
        console.log(error)
    }
})

router.get('/init', async (req, res) => {
    try {
        await CarModel.insertMany(Cars)
        await ServiceModel.insertMany(Services)
        await PartsModel.insertMany(Parts)
        res.send('ok')
    } catch (error) {
        console.log(error)
    }
})
router.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find({})
        res.send(users)
    } catch (error) {
        console.log(error)
    }
})

router.get('/services', async (req, res) => {
    try {
        const services = await ServiceModel.find({})
        res.send(services)
    } catch (error) {
        console.log(error)
    }
})

router.post('/service', async (req, res) => {
    const service = req.body
    try {
        const newService = await ServiceModel.create(service)
        const services = await ServiceModel.find({})
        res.send(services)
    } catch (error) {
        console.log(error)
    }
})


router.get('/parts', async (req, res) => {
    try {
        const parts = await PartsModel.find({})
        res.send(parts)
    } catch (error) {
        console.log(error)
    }
})

router.get('/cart', async (req, res) => {
    try {
        const cart = await CartModel.find({})
        res.send(cart)
    } catch (error) {
        console.log(error)
    }
})

router.post('/cart', async (req, res) => {
    const cart = req.body
    try {
        const newCart = await CartModel.create(cart)
        const cart = await CartModel.find({})
        res.send(cart)
    } catch (error) {
        console.log(error)
    }
})
export default router
