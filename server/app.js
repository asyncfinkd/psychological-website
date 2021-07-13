const express = require("express");
const cors = require("cors");
const mongoose = required("mongoose");
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server running on port - ${PORT}`);
})