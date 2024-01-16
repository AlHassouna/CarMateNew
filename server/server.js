import express from 'express'
import garageApi from './routes/garageApi.js';
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import path from "path";
import {fileURLToPath} from 'url';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from "swagger-jsdoc"

const app = express()
mongoose.connect("mongodb://127.0.0.1:27017/garage", {
    useNewUrlParser: true,
}).catch((err) => console.log(err))

// const options = {
//     definition: {
//         openapi: "3.0.0",
//         info: {
//             title: "Library API",
//             version: "1.0.0",
//             description: "A simple Express Library API",
//         },
//         servers: [
//             {
//                 url: "http://localhost:4200",
//             },
//         ],
//     },
//     apis: ["./routes/garageApi.js"],
// };
// const specs = swaggerJsDoc(options);
const _dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(_dirname, '../client')));
app.use(express.static(path.join(_dirname, '../node_modules')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use('/api/v1', garageApi)

const port = 4200
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})

