const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");

const app = express();

app.get("/", (req, res) => {
    res.send("API is running");
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server started on port ", port);
});
