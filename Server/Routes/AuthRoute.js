const express = require("express");
const router = express.Router();
const {
    contact
 } = require("../Controller/ContactController");
const {
    Projects
} = require("../Controller/ProjectController");

 router.post("/contact",contact);
 router.get("/projects",Projects);

 module.exports = router;