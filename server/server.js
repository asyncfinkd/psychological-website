const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect(
  "mongodb+srv://epsybsu:nikanikonika@cluster0.un7ei.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(3001, () => {
  console.log("server listen 3001 port");
});
