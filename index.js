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
	console.log(req.method + " " + req.url);
	next();
});

App.get("/", function(req, res, next) {
	res.status(200).render("index", { "title": "The Future Proof." });
});

App.get("/elec", function(req, res, next) {
	res.status(200).render("elec", { "title": "The Future Proof: Electricity." });
});

App.get("/trans", function(req, res, next) {
	res.status(200).render("index", { "title": "The Future Proof: Transportation." });
});

App.get("/water", function(req, res, next) {
	res.status(200).render("index", { "title": "The Future Proof: Water." });
});

App.get("/waste", function(req, res, next) {
	res.status(200).render("index", { "title": "The Future Proof: Waste." });
});

App.get("*", function(req, res, next) {
	res.status(404).render("404", { "title": "The Future Proof?" });
});

// start the app
App.listen(PORT, function() {
	console.log("Listening on port: " + PORT);
});