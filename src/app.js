const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Hledej")
})

app.get("/protected", (req, res) => {
    res.sendFile(__dirname + "/shrek.jpg")
})

app.listen(3000, () => {
    console.log("listening")
})