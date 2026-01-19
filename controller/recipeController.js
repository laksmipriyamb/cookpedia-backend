const recipes = require('../model/recipeModel')

//get recipes
exports.getAllRecipesController = async(req,res)=>{
    console.log("Inside getAllRecipesController");
    try{
        const allRecipes = await recipes.find()
        res.status(200).json(allRecipes)

    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
    
}