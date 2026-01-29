const express = require('express')
const recipeController = require('../controller/recipeController')
const userController = require('../controller/userController')
const downloadController = require('../controller/downloadController')
const saveController = require('../controller/saveController')
const feedbackController = require('../controller/feedbackController')
const jwtMiddleware = require('../middleware/jwtMiddleware')
const multerMiddleware = require('../middleware/multerMiddleware')

const router = new express.Router()

//get all recipes
router.get('/recipes',recipeController.getAllRecipesController)
//register
router.post('/register',userController.registerController)
//login
router.post('/login',userController.loginController)

//feedback
router.post('/feedback',feedbackController.addFeedbacksController)

//get feedback
router.get('/feedbacks-approve',feedbackController.getApprovedFeedbackController)

// ------------------authorised user-------------------
//view recipe
router.get('/recipe/:id',jwtMiddleware,recipeController.viewRecipeController)

//related recipe
router.get('/related-recipes',jwtMiddleware,recipeController.relatedRecipesController)

// add to download
router.post('/downloads/:id',jwtMiddleware,downloadController.addToDownloadsController)

//add to save
router.post('/recipes/:id/save',jwtMiddleware,saveController.addToSaveRecipeController)

//get user save recipe
router.get('/recipe-collection',jwtMiddleware,saveController.getUserSaveRecipesController)

//remove user save recipe
router.delete('/recipe-collection/:id',jwtMiddleware,saveController.removeUserRecipeItemController)

//get user downloads recipe
router.get('/user-downloads',jwtMiddleware,downloadController.getUserDownloadListController)

//edit user picture
router.put('/user-edit',jwtMiddleware,multerMiddleware.single('picture'),userController.editUserPictureController)


module.exports = router