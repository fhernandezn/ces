require('dotenv').config();

const {
    PORT
 } = process.env;

const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');
const app = express();

app.use(cors());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});