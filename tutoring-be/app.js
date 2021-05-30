require('dotenv').config() //always on top of file to be sure

const express= require('express');
const app = express();
const tasks = require('./router/tasks');
const connectDB = require('./config/db');

const port = process.env.PORT || 8080;

connectDB();
app.use(express.json());

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    res.header('Access-Control-Allow-Methods', "GET, PUT, POST, DELETE");
    next();
} 
app.use(allowCrossDomain);
app.use('/tasks', tasks);

app.listen(port, () => console.log(`Server started to run on ${port}`));


