const express = require('express');
const { handleGetAllPizzas } = require('../controller/pizza');

const router = express.Router();

router.get('/', handleGetAllPizzas);

module.exports = {
    pizzaRouter: router,
}