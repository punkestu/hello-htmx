const express = require("express");
const app = express();
const {join} = require("path");

app.set("view engine", "ejs");
app.get("/", (_, res) => {
    res.render("index");
});

app.get("/users", (req, res) => {
    res.send("world");
});

app.use("/static", express.static(join(__dirname, "/static")));
app.use("/static/htmx.org", (_, res) => {
    res.sendFile(join(__dirname, "/node_modules/htmx.org/dist/htmx.js"));
})

app.listen(3000);