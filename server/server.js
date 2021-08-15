const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
process.env.PWD = process.cwd();
app.use("/public", express.static(process.env.PWD + "/public"));
// app.use(express.static("public"));

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

const Admin = require("./router/admin/signin/AdminSigninRouter");
app.use("/api", Admin);

const Create = require("./router/events/add/EventsAddRouter");
app.use("/api", Create);

const Delete = require("./router/events/delete/EventsDeleteRouter");
app.use("/api", Delete);

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log("server listen 3001 port");
});
