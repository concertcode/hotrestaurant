var express = require("express")
var bodyParser = require("body-parser")
var path = require("path")

var app = express()

var port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: "application/vnd.api+json" }))

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });

app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
  