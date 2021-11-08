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
				"body": "As individuals, most of the factors affecting our carbon footprint are outside of our control. This makes it all the more important that we do everything that we can to reduce the things that we do have control over."
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
	res.status(200).render("page", {
		"title": "The Future Proof",
		"subtitle": "Electricity",
		
		"body": [
			{
				"body": "<b>Electricity is produced in many ways, all of which have some kind of environmental impact. While changing to a more sustainable means of producing energy sounds like a cure-all to the issue of energy production, there is no match for reducing our use, since whatever form of energy we settle on will have consequences, and they will be proportional to the amount of energy being consumed. Some ways to reduce the electricity we consume.</b>"
			},
			{},
			{
				"body": "Turn off appliances that aren't in use. e.g. lights, a/c, heaters. This is the simplest way to reduce your electricity consumption.",
			},
			{
				"tag": "cards",
				"cards": [
					"<b>In my home, we leave a lot of lights on. By turning them all off, we reduce the amuont of energy we're consuming to the amount that we're actually using.</b>"
				]
			},
			{
				"body": "Once you've reduced your electricity consumption to things that you are actually using, look into ways to make your appliances more efficient. e.g. programmable led bulbs, a/c, insulation. By reducing the time that you run these appliances for or the power that they take to run, you will further decrease your electricity consumption."
			},
			{
				"tag": "cards",
				"cards": [
					"<b>A really simple example of this is lowering the temperature of your water heater to the lowest setting that you can comfortably use.</b>"
				]
			}
		]
	});
});

App.get("/trans", function(req, res, next) {
	res.status(200).render("page", {
		"title": "The Future Proof",
		"subtitle": "Transportation",
		
		"body": [
			{
				"body": "<b>Transportation is one of the most intuitive ways that we shape our carbon footprint. We all understand that driving burns gasoline, and burning gasoline releases many pollutants. Beyond that, most petroleum products are on an inherrent time limit, as we are slowly but surely running out of crude oil. Despite the fact that many of us understand these facts, we treat driving as a necessary evil in the modern world, and often make very little effort to reduce mileage.</b>"
			},
			{},
			{
				"body": "The simplest way to reduce the amount of pollution you generate from transportation is to avoid unnecessary trips. This includes plane flights and just long drives, as these both tend to accumulate pretty quickly."
			},
			{
				"tag": "cards",
				"cards": [
					"<b>My family moved recently, and we often drive back to the area we used to live in. This is around 100 miles that we drive semi-regularly, contributing a massive ammount to our carbon footprint that we don't need to be doing.</b>"
				]
			},
			{
				"body": "It is important to keep short recurrent trips in mind as well, as they can accumulate over time, and be just as damaging as long trips in the long run."
			},
			{
				"tag": "cards",
				"cards": [
					"<b>Because we used to live in a much more urban area, my family is used to just going into the city. However, it is about a 12 mile drive away from us. While this isn't by any means an exhaustive distance to travel, we travel it practically daily, contributing about half the amount of carbon as the trips to where we used to live. </b>"
				]
			}
		]
	});
});

App.get("/water", function(req, res, next) {
	res.status(200).render("page", {
		"title": "The Future Proof",
		"subtitle": "Water",
		
		"body": [
			{
				"body": "<b>Water is a strange one. When we think of the environental impact we tend to think of things that went wrong -- methan leaks, lead poisoning -- but when the system is working as intended it still puts a massive strain upon the environment. Any water that we use has to be treated before it reaches us, and then again after it leaves our home as waste water. There are many steps involved in this process that require a large amount of power. In addition, whil water is in this cycle, it is being taken away from the ecosystem it originally played a part in, and exploitation of water resources can have dire effects on the local ecosystem.</b>"
			},
			{},
			{
				"body": "Similarly to the electricity consumption, one of the biggest ways to save water consumption is to make your current appliances more efficient. This <em>can</em> mean buying new appliances like low-flow toilets or front-loading washing machines, or it can be as simple as making sure to fill the washer before every load. Get creative!"
			},
			{
				"tag": "cards",
				"cards": [
					"<b>A lot of the appliances at our home haven't been used in a long time and need to be replaced anyways, so in that process we can try to favor water effiecient options.</b>"
				]
			},
			{
				"body": "A very simple way to limit water use is simply to stay aware of it. It's very easy to lose track of time and leave a faucet running for a minute or two while you're doing something else, but in the long run that is gallons of water that are being wasted."
			},
			{
				"tag": "cards",
				"cards": [
					"<b>This applies to all water sources, not just sinks: hoses, showers, etc.</b>"
				]
			}
		]
	});
});

App.get("/waste", function(req, res, next) {
	res.status(200).render("page", {
		"title": "The Future Proof",
		"subtitle": "Waste",
		
		"body": [
			{
				"body": "<b>Waste acts as sort of a catch all for evverything else we consume. By looking at our garbage, we can see not only how we contribute to landfills and recylcing plants, but also what products we use regularly. By examining the carbon footprint of these products, we can get an idea of the less direct pieces.</b>"
			},
			{},
			{
				"body": "The first thing to do to reduce waste is to stop consuming products made solely to be thrown away. There are many disposable products in our life that could be replaced by a more permanent solution at a slight inconvenience."
			},
			{
				"tag": "cards",
				"cards": [
					"<b>This includes plastic cups, plastic utensils, paper plates, and paper towels..</b>"
				]
			},
			{
				"body": "However, many of the products that we use are stored in disposable packaging. Buying in bulk limits the amount of packaging that is needed, but beyond that there is often no good alternative."
			},
			{
				"tag": "cards",
				"cards": [
					"<b>Buying in bulk and only purchasing whatever prepackaged you actually need to buy prepackaged is the most you're really able to do for this.</b>"
				]
			}
		]
	});
});

App.get("*", function(req, res, next) {
	res.status(404).render("404", { "title": "The Future Proof?" });
});

// start the app
App.listen(PORT, function() {
	console.log("Listening on port: " + PORT);
});