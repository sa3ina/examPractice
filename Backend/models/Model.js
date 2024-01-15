const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: String,
    description: String,
    rating: String,
    imgSrc: String,
    id: String,
  },
  {
    collection: "Exam",
    timestamp: true,
  }
);

const newSchema = mongoose.model("Exam", schema);
module.exports = newSchema;
