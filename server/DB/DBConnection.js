const mongoose = require("mongoose");
const dataString = "mongodb://localhost:27017/swiftware";

const DBConnection = async () => {
  await mongoose
    .connect(dataString)
    .then(() => {
      console.log(`MongoDB connected`);
    })
    .catch((err) => {
      console.log(`DB connection err is :${err.message}`);
    });
};
module.exports = DBConnection;
