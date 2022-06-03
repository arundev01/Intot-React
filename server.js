
const express = require("express");

const app = express();

const cors = require("cors");

const mongoose = require("mongoose");

app.use(cors());

app.use(express.json());

mongoose.connect("mongodb+srv://arundev2318:arun2118@cluster0.wv8a5.mongodb.net/registrationDB")

app.use("/", require("./routes/registrationRoutes"));


app.listen(3000, function() {
    console.log("express server is running on port 3000");
});