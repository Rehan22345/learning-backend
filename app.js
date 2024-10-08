const express =require('express');
const app = express();
const connect_database= require('./Database/connect.js');
const model = require("./Database/user.js");
connect_database();
app.use(express.json());
app.get('/', (req,res)=>{
    res.send("Hello world !")
});
app.post("/data",async(req,res)=>{
const {name,pass}  = req.body;
console.log(name,pass);
await model.create({
    name : name,
    password : pass,
})
})
app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});
