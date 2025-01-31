const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connection');
const bodyParser = require('body-parser');
const sendRouter = require("./Routes/AuthRoute");
require('dotenv').config(); 

const app = express();
const PORT = 4000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

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

app.use(bodyParser.json());

app.use("/send", sendRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
