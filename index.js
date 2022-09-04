const express = require("express");
const morgon = require("morgan");
const mongoose = require("mongoose");
const Rout = require("./Router/post.route");
const App = express();

const router = require("./Router/post.route")
const PORT = 3006;

//Middlewar
App.use(express.json())
App.use(morgon("dev"));


//Routing
App.use("/post",Rout)



App.listen(PORT, () => {
  console.log(`Server Listinig to Port by dhamu: ${PORT}`);
});


//Mongo DB

mongoose.connect("mongodb://localhost:27017/post",(err)=>{
if(err){console.log("DB Not Connected")}
else{console.log("DB connected sucessfully");}
})