const mongoose = require("mongoose");
const schema =  new mongoose.Schema({
name : {
    type: String,
},
password : {
    type : String,
}
})

module.exports = mongoose.model("UserData", schema);

