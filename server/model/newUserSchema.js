const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define User Schema
const UserSchema = new Schema({
    userType:{
        type:String,
        require:true,
    },
    role:{
        type:String,
        require:true,
    },
    name:{
        type:String,
        requir
    }
})