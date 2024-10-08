const express =require('express');
const dotenv = require("dotenv");
const connect_database= require('./Database/connect.js');
// const model = require("./Database/user.js");

// Load environment variables from .env
dotenv.config();
connect_database();
const app = express();

app.use(express.json());
app.get('/', (req,res)=>{
    res.send("Hello world !")
});






app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});
