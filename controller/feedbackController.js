const feedbacks = require('../model/feedbackModel')

//add to feedback
exports.addFeedbacksController = async(req,res)=>{
    console.log("Inside addFeedbacksController");
    const {name,email,message} = req.body
    try{
        const newFeedback = await feedbacks.create({
            name,email,message
        })
        res.status(200).json(newFeedback)
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
    
}

//get approved feedbacks
exports.getApprovedFeedbackController = async(req,res)=>{
    console.log("Inside getApprovedFeedbackController");
    try{
        const approveFeedbacks = await feedbacks.find({status:{$eq:"approve"}})
        res.status(200).json(approveFeedbacks)
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
    
}