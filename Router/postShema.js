const mongoose = require("mongoose");
const post = mongoose.Schema({
    Name :{
        type : String,
        reqired : true
    },
    Age :{
        type : String,
        reqired : true
    },
    Email :{
        type : String,
        required : true
    }
});

module.exports = mongoose.model("register",post);