const mongoose = require("mongoose");
require("dotenv").config();
module.exports = connect = async () => {
  try {
    const response = await mongoose.connect(
      //paste your db key,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
      }
    );
    console.log("connection created");
  } catch (error) {
    console.log(error);
  }
};
