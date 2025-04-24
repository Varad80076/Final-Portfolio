const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    title: String,
    category: String,
    image: String
})
//export Schema
module.exports = mongoose.model("projects",ProjectSchema);