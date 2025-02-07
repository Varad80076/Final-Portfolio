const Contact = require('../models/Contact');
const mailSender = require("../helper/mailer,js");

const contact = async (req, res) => {
    console.log("Server is Running");
    try {
            const { name, email, message } = req.body;
            let contacts = new Contact({name,email,message});
            const mailResponse = await mailSender(name,email,message, "VERIFY");
            let result = await contacts.save();
            return res.status(201).send(result);
        } catch (err) {
            console.error(err);
            res.status(500).send({ error: "Failed to save contact" });
        }
 };
module.exports = {
    contact
 };