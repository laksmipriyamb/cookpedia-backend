const express = require('express')
const recipeController = require('../controller/recipeController')
const userController = require('../controller/userController')
const downloadController = require('../controller/downloadController')
const jwtMiddleware = require('../middleware/jwtMiddleware')

const router = new express.Router()

//get all recipes
router.get('/recipes',recipeController.getAllRecipesController)
//register
router.post('/register',userController.registerController)
//login
router.post('/login',userController.loginController)

// ------------------authorised user-------------------
//view recipe
router.get('/recipe/:id',jwtMiddleware,recipeController.viewRecipeController)

//related recipe
router.get('/related-recipes',jwtMiddleware,recipeController.relatedRecipesController)

// add to download
router.post('/downloads/:id',jwtMiddleware,downloadController.addToDownloadsController)

module.exports = router