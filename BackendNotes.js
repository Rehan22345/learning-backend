// const express = require("express");

// const app = express();
// const cors = require("cors");


/****************Learning Fs modules in Node js**************** */



// const fs = require("fs")
// app.use(cors());
// app.use(express.json());
// app.get("/",(req,res)=>{
// res.send("Hello dai")
// })
// app.post("/",(req,res)=>{
//    let {name,email,pass } =  req.body;
//    let obj = {name,email,pass};
// // {rehan , rehanpoudel@getMaxListeners.com ,rehan 123}
// fs.writeFile("text.txt",JSON.stringify(obj),()=>{
//     console.log("file created");
// })

// })
// app.listen(7000,()=>{
//     console.log("Server is running on port 3000");
// })


// //? frontend bata data pathaunee and recieved in Backend
// //! and store in a file that data 

// // axios.post("localhost:5000/",data)
// // data => email and name 
// // {

// // }
// // {
// //     name : inputvalue
// //     email : inputvalue
// // }



// const fs = require('node:fs/promises');
// async function readfile(){
// const file = await fs.writeFile("server.js","Hello world")
//     // const file2 = await fs.mkdir("indexfolder");
//     console.log('hello world')
// }
// readfile()
// const { unlink } = require('node:fs/promises');
// unlink("server.js");

// async function readfile(){
//        const file = (await fs.readFile("text.txt", "utf-8")).length;




// const secondfile = await fs.writeFile("count.txt",file.toString());
// console.log(file)
// }
// readfile();





/************************Doing practice using fs modules************************** */

// const express = require("express");
// const app = express();
// const cors = require("cors");
// const fs = require('node:fs/promises');


// async function createFile(){

// const dir = fs.mkdir("projects");
// const file = fs.writeFile("projects/project1.txt","hello everybody from rehanb")
// const directory = await fs.readdir("projects")
// console.log(directory);

// }

// createFile();



// app.get("/",(req,res)=>{
//        res.send("Hello dai")
//        })
  
  
  
  
//    app.listen(7000,()=>{
//           console.log("Server is running on port 3000");
//    })
  











































/*******************Learning Os modules in Node js*************** */

// const express = require("express");

// const app = express();
// const cors = require("cors");
// const os = require("node:os");


// console.log(os.platform());
// console.log( os.totalmem());
// console.log(os.uptime());
// console.log(os.release());
// console.log(os.arch());
// console.log(os.homedir());
// console.log(os.networkInterfaces());
//  console.log(os.userInfo());
//  console.log(os.cpus());
//   console.log(os.hostname());
//   console.log(os.type());
//   console.log(os.loadavg());
//   console.log(os.endianness());
//   console.log(os.uptime());
  
// app.get("/",(req,res)=>{
//      res.send("Hello dai")
//      })




//  app.listen(7000,()=>{
//         console.log("Server is running on port 3000");
//  })
  // const createfile = await fs.writeFile("text.txt","Hello dipson dai"); // create an new file with the given data
// const readFile = await fs.readFile("text.txt","utf-8"); // read the data of the  file
// const unlined = await fs.unlink("text.txt"); delete the file from the location 
// const append = fs.appendFile("text.txt"," from rehan Paudel"); // Append some content to the already present file like updated
// const copy = fs.copyFile("text.txt","rehan.txt") // copy the file and paste that into new file 
// const newfolder = await fs.mkdir("Projects"); // creates an new directory 
// const newfile = await fs.writeFile("Projects/rehan.txt","Hello rehan paudel from dispon daii ") making files inside a new dir / folder
// const deletfolder = await fs.rmdir("Projects") // remove the folder  and all the files inside it
// const file = await fs.readdir("Projects"); // it will read the files or return the files inside a particular directory orfolder 
// console.log(file.length);

// let detils = await fs.stat("text.txt"); // give proper details abou the file like size , creat time , append time and modified time

// console.log(detils);
