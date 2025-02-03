//mongoose implimentation
const mongoose = require('mongoose')
//create Schema
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    message: String
})
//export Schema
module.exports = mongoose.model("users",userSchema);