const express = require("express");
const router = express.Router();
const {
    contact
 } = require("../Controller/ContactController");

 router.post("/contact",contact);

 module.exports = router;