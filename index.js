require('dotenv').config();
require('./sequalize');

const {
    PORT
 } = process.env;

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});