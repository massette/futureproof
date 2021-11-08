"use strict";

// 
const PATH = require("path");
require("dotenv").config();

// initialize express stuff
const EXPRESS = require("express");
const PORT = process.env.PORT || 3000;
const App = EXPRESS();

// set up directory stuff
App.set("views", "./views")
App.set("view engine", "pug");
App.use(EXPRESS.static(PATH.join(__dirname, "public")));

// routing stuff
App.use("/", function(req, res, next) {
	console.log("ACCESSED " + req.url);
	next();
});

App.get("/", function(req, res, next) {
	res.status(200).render("index", { "title": "The Future Proof." });
});

App.get("*", function(req, res, next) {
	res.status(404).render("404", { "title": "The Future Proof?" });
});

// start the app
App.listen(PORT, function() {
	console.log("Listening on port: " + PORT);
});