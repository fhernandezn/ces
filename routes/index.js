const express = require('express');
const userRoutes = require('./user.routes');
const router = express.Router();

router.use('/users', userRoutes);
router.use((err, req, res, next) => {
    console.error(err);
    res.sendStatus(500);
});

module.exports = router;