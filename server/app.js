require('dotenv/config');
const express = require( "express");
const router = require('./routes/todo.route')
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors());
app.use('/*', router)

app.listen(3001, 'localhost', () => {
    console.log("Hello world")
});