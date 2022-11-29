const mongoose = require("mongoose");

const connect = async (req, res) => {
  return await mongoose.connect(process.env.URL);
};

module.exports = connect;
