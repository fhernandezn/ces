require('dotenv').config();
require('./sequalize');

const {
    PORT
 } = process.env;

const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');
const app = express();
const bodyParser = require('body-parser')

app.use(cors());
app.use( bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});