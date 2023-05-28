const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.port || 5000;
const cors = require("cors");
app.use(cors());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

mongoose
  .connect(
    "mongodb+srv://abhishek:abhishek@cluster0.hxiivnt.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("DB connection is sucessful");
  })
  .catch((err) => {
    console.log("no connection");
  });

app.listen(port, () => {
  console.log(`connection is sucessful ${port}`);
});
