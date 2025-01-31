const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connection');
const bodyParser = require('body-parser');
const sendRouter = require("./Routes/AuthRoute");
require('dotenv').config(); 

const app = express();
const PORT = 4000;


app.options('*', cors());  // Enable preflight request handling for all routes
app.use(cors({
    origin: [
        // "https://portfolio-varad-theta.vercel.app/contact",
        // "https://portfolio-varad-theta.vercel.app",
        // "https://portfolio-varad-4ib9ud8fa.vercel.app",
        process.env.FRONTEND_API_KEY
    ],
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    credentials: true, 
}));



connectDB;

app.use(bodyParser.json());
app.use(express.json());

app.use("/send", sendRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
