const express = require('express')
const recipeController = require('../controller/recipeController')

const router = new express.Router()

//get all recipes
router.get('/recipes',recipeController.getAllRecipesController)

module.exports = router