const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("node:fs/promises");
// const os = require("node:os");



app.get("/", (req, res) => {
  res.send("Hello dai");
});


async function  getFiles() {
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



}


getFiles()





app.listen(7000, () => {
  console.log("Server is running on port 3000");
});


// WriteFile creates a new file
// readFile read the data of the file
// Unlink delete  the file

