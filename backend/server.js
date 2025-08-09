const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
    res.send("API is running");
});
app.get("/api/chat", (req, res) => {
    res.send(chats);
});
app.get("/api/chat/:id", (req, res) => {
    const singleChat = chats.find((c) => c._id == req.params.id);
    res.send(singleChat);
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server started on port ", port);
});
