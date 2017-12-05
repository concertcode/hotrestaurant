var express = require("express")
var bodyParser = require("body-parser")
var path = require("path")

var app = express()

var port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: "application/vnd.api+json" }))

var waitList = []
var tableList = []

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function(req, res) {
    res.json(tableList)
});

app.get("/api/waitlist", function(req, res) {
    res.json(waitList)
});

app.post("/api/clear", function(req, res) {
    waitList = []
    tableList =[]
});

app.post("/api/tables", function(req, res) {
    var newOrder = req.body;

    if (tableList.length < 5) {
        tableList.push(newOrder)
        console.log(tableList)
        res.json(true);
    } else {
        waitList.push(newOrder)
        console.log(waitList)
        res.json(false);
    }
  });

app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
  