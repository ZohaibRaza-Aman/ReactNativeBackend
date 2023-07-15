const mongoose = require("mongoose");

const AppSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    title:{
        type:String,
        required: true
    },
    product:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required:true
    }
    
})

const AppModel = mongoose.model("app",AppSchema);

module.exports = AppModel;