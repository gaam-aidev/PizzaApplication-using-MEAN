const mongoose = require('mongoose');

const ingredientsSchema = new mongoose.Schema([{
        id: {
            type: String,
            required: true
        },
        iname: {
            type: String,
            required: true
        },
            price: {
        type: String,
        required: true
        },
        image: {
        type: String,
        required: true
        }
    }]
);

const Ingredients = mongoose.model('Ingredients', ingredientsSchema, 'ingredients');

module.exports = Ingredients; 