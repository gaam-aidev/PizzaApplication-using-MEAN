const express = require('express');
const { handleGetAllIngredients } = require('../controller/ingredients');

const router = express.Router();

router.get('/', handleGetAllIngredients);

module.exports = {
    ingredientsRouter: router,
}