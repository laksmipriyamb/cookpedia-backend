const mongoose = require('mongoose')

const connectionString = process.env.DB_URL

mongoose.connect(connectionString).then(res=>{
    console.log("Database connected successfully");
    
}).catch(err=>{
    console.log("Database connection Failed");
    console.log(err);
})