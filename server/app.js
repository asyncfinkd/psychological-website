const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://billgates:nikanikonika@cluster0.fvqri.mongodb.net/psychological?retryWrites=true&w=majority",  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const InsertSignup = require("./router/Register/RegisterInsert");
app.use("/auth", InsertSignup);

const ReadSignin = require("./router/Signin/ReadSignin");
app.use("/auth", ReadSignin);

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server running on port - ${PORT}`);
})