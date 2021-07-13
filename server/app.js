const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://billgates:nikanikonika@cluster0.fvqri.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const InsertSignup = require("./Insert/Register/RegisterInsert");
app.use("/auth", InsertSignup);

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server running on port - ${PORT}`);
})