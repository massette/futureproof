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
	res.status(200).render("page", {
		"title": "The Future Proof",
		
		"splash": [
			{
				"tag": "img",
				"src": "images/factorio.png"
			},
			{
				"body": "\"A carbon footprint measures the total greenhouse gas emissions caused directly and indirectly by a person, organization, event, or product.\" <a href='https://www.carbontrust.com/resources/carbon-footprinting-guide' target='_blank' class='link link--head'>- Carbon Trust</a>"
			},
			{
				"body": "As a society, we consume resources at a rate that the world does not have room to abide, and generate more pollution than it has the means to handle."
			},
			{
				"body": "As a society, <b>we are unsustainable.</b>"
			},
			{},
			{
				"body": "Most of the factors affecting our carbon footprint are outside of our control. This makes it all the more important that we do everything that we can to reduce the things that we do have control over."
			}
		],
		
		"body": [
			{
				"body": "Over the course of the past few months, my class has performed a series of audits to quantify our various contributions to these habits, and begin to make efforts to reduce them. What follows is a summary of the things I learned through those audits:"
			},
			{
				"tag": "cards",
				"cards": [
					"<b>Electricity</b> is produced in many ways, all of which have some kind of environmental impact. While changing to a more sustainable means of producing energy sounds like a cure-all to the issue of energy production, there is no match for reducing our use, since whatever form of energy we settle on will have consequences, and they will be proportional to the amount of energy being consumed.",
					"<b>Transportation</b> is one of the most intuitive ways that we shape our carbon footprint. We all understand that driving burns gasoline, and burning gasoline releases many pollutants. Beyond that, most petroleum products are on an inherrent time limit, as we are slowly but surely running out of crude oil. Despite the fact that many of us understand these facts, we treat driving as a necessary evil in the modern world, and often make very little effort to reduce mileage.",
					"<b>Water</b> is a strange one. When we think of the environental impact we tend to think of things that went wrong -- methan leaks, lead poisoning -- but when the system is working as intended it still puts a massive strain upon the environment. Any water that we use has to be treated before it reaches us, and then again after it leaves our home as waste water. There are many steps involved in this process that require a large amount of power. In addition, whil water is in this cycle, it is being taken away from the ecosystem it originally played a part in, and exploitation of water resources can have dire effects on the local ecosystem.",
					"<b>Waste</b> acts as sort of a catch all for evverything else we consume. By looking at our garbage, we can see not only how we contribute to landfills and recylcing plants, but also what products we use regularly. By examining the carbon footprint of these products, we can get an idea of the less direct pieces."
				]
			}
		]
	});
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