//import mongoose and create connection with database
const mongoose = require('mongoose');
require('dotenv').config(); 

const mongo_url = process.env.MONGO_CONN;
mongoose.connect(mongo_url)
.then((result) => {
    console.log("mongoDB Connected");
  })
  .catch((err) => {
    console.log(err, "Error occured in database connection");
  });
