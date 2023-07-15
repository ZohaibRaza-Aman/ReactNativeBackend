const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName:{
      type:String,
    },
    email:{
      type:String,
      required:true
    },
    password:{
      type:String,
      required:true
    }
});

const signModel = mongoose.model("users",userSchema);

module.exports = signModel;