const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String, required:true
    }, 
    email:{
        type:String, required:true
    },
   
    userType:{
        type:String,
        default:"subscriber"
    }
})

module.exports = mongoose.model("User", userSchema);