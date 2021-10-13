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

const About = require("./router/about/AboutRouter");
app.use("/api", About);

const AboutChange = require("./router/about/change/AboutChangeRouter");
app.use("/api", AboutChange);

const Partners = require("./router/partners/PartnersRouter");
app.use("/api", Partners);

const AddPartners = require("./router/partners/add/AddPartnersRouter");
app.use("/api", AddPartners);

const DeletePartners = require("./router/partners/delete/AdminPartnersDeleteRouter");
app.use("/api", DeletePartners);

const EventsRead = require("./router/events/read/AdminEventsRead");
app.use("/api", EventsRead);

const PartnersEdit = require("./router/partners/edit/AdminPartnersEdit");
app.use("/api", PartnersEdit);

const checkifadmin = require("./router/admin/checkIfAdmin/AdminCheckIfAdmin");
app.use("/api", checkifadmin);

const EditEvents = require("./router/events/edit/AdminEventsEditRouter");
app.use("/api", EditEvents);

const Contacts = require("./router/contacts/ContactsRouter");
app.use("/api", Contacts);

const Infos = require("./router/info/InfoRouter");
app.use("/api", Infos);

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`server listen ${PORT} port`);
});
