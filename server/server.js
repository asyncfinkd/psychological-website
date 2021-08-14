const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect(
  "mongodb+srv://epsybsu:nikanikonika@cluster0.un7ei.mongodb.net/epsybsu?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const Events = require("./router/events/EventsRouter");
app.use("/api", Events);

const Reports = require("./router/reports/ReportsRouter");
app.use("/api", Reports);

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log("server listen 3001 port");
});
