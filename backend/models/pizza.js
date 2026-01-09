const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ingredients: [{
        id: {
            type: String,
            required: true
        },
        iname: {
            type: String,
            required: true
        }
    }],
    topping: [{
        id: {
            type: String,
            required: true
        },
        tname: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        }
    }]
});

const Pizza = mongoose.model('Pizza', pizzaSchema, 'pizzaitems');

module.exports = Pizza; 