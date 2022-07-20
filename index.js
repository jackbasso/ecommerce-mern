//Express import
const express = require("express");
const app =  express();
//dotEnv import
const dotenv = require("dotenv");
dotenv.config();
//Mongoose import & connection
const mongoose = require("mongoose");
const { application } = require("express");
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successfully!"))
  .catch((error) => (
    console.log(error)
  ));

//Endpoints
app.get("/api/test", () => {
  console.log("test is succesfull")
})
//Port listen
  app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running");
  })