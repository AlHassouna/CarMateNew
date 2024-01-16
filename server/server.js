import express from 'express'
import garageApi from './routes/garageApi.js';
import mongoose from 'mongoose'
import path from "path";
import {fileURLToPath} from 'url';
const app = express()
mongoose.connect("mongodb://127.0.0.1:27017/garage", {
    useNewUrlParser: true,
}).catch((err) => console.log(err))

const _dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(_dirname, '../client')));
app.use(express.static(path.join(_dirname, '../node_modules')));

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/api/v1', garageApi)

const port = 4200
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})

