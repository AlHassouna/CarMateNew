import express from 'express'
import garageApi from './routes/garageApi.js';
import mongoose from 'mongoose'
import path from "path";
import {fileURLToPath} from 'url';
const app = express()
const uri = "mongodb+srv://CarMate-DB:Aa123456@carmate.mamrf2g.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');
});

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

