const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connection');
const contact = require('./models/Contact');


const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors({
    origin: [
        // "https://portfolio-varad-theta.vercel.app/contact",
        // "https://portfolio-varad-theta.vercel.app",
        // "https://portfolio-varad-4ib9ud8fa.vercel.app",
        process.env.FRONTEND_API_KEY
    ],
    methods: ['GET', 'POST'],
    allowedHeaders: 'Content-Type,Authorization',
    mode:'no-cors'
}));
app.options('*', cors());  // Enable preflight request handling for all routes


connectDB;
console.log('MongoDB Connected');

app.post("/contact", async (req, res) => {
    console.log("Server is Running");
    try {
        let contacts = new contact(req.body);
        let result = await contacts.save();
        res.status(201).send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: "Failed to save contact" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://127.0.0.1:${PORT}`);
});
