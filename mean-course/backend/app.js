const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postsRoutes = require("./routes/posts");

const app = express();

mongoose.connect("mongodb+srv://svcacct:02gURZxtb6QlXUz8@cluster0-mapzz.mongodb.net/test?retryWrites=true",{ useNewUrlParser: true }).then(()=>{
  console.log("connected to mongo successfully!");
}).catch((error)=>{

  console.log("had an error connecting to mongo!");
});

app.use(bodyParser.json());

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS")

  next();
});

app.use("/api/posts",postsRoutes);

module.exports = app;
