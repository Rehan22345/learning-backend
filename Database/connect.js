const mongoose = require("mongoose");
const database_url = process.env.URL || "";

const connectdb = async () => {
  try {
    await mongoose.connect(database_url, {});
    console.log("connected Sucessfully !!")
  } catch (err) {
    console.log(err);
    process.exit(0);
  }
};
module.exports = connectdb;
