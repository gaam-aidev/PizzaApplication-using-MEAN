const Ingredients = require('../models/ingredient');

async function handleGetAllIngredients(req, res){
    try{
        const ingredients = await Ingredients.find({});
        res.status(200).json(ingredients);
    }catch(error){
        res.status(500).json({message: `Server Error, ${error}`});
    }
}

module.exports = {
    handleGetAllIngredients,
}