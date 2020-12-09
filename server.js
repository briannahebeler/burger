var express = require("express");

var PORT = process.env.PORT || 8000;

var app = express();

// serve static content for app from the public folder // 
app.use(express.static("public"));

// parse app body as JSON //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// import routes & give the server access //
var routes = require("./controllers/burgersController.js");

app.use(routes);

// start server //
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});