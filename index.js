//Express import
const express = require("express");
const app =  express();
//Routes import
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth")
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

//for incomming json bodies
app.use(express.json())
//Endpoints
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);


//Port listen
  app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running");
  })