const Pizza = require('../models/pizza');

async function handleGetAllPizzas(req, res){
    try{
        const pizzas = await Pizza.find({});
        res.status(200).json(pizzas);
    }catch(error){
        res.status(500).json({message: `Server Error, ${error}`});
    }
}

module.exports = {
    handleGetAllPizzas,
}