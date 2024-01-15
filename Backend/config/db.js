const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://bd6zv16m3:examtest@examtest.2k6bfz5.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected MongoDb");
  })
  .catch((err) => {
    console.log("err", err);
  });
