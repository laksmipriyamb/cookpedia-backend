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

//view recipe
exports.viewRecipeController = async(req,res)=>{
    console.log("Inside viewRecipeController");
    const {id} = req.params
    try{
        const viewRecipe = await recipes.findById({_id:id})
        res.status(200).json(viewRecipe)
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}


//related recipes to an recipe
exports.relatedRecipesController = async(req,res)=>{
    console.log("Inside relatedRecipesController");
    const cuisine = req.query.cuisine
    try{
        const allRecipe = await recipes.find({cuisine})
        res.status(200).json(allRecipe)
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}