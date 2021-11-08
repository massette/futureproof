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
				"body": "The combustion of gasoline in our cars’ engines produces many harmful pollutants, one of the most well-known being carbon dioxide, as well as nitrogen oxides and sulfur. These pollutants contribute to both climate change and acid rain. By reducing our mileage, we can reduce our contributions to these issues. Furthermore, the extraction and refining of crude oil are costly and unsustainable operations. It requires tremendous amounts of energy and water, and by reducing our dependence on petroleum based products, we would reduce the need for these processes and reduce the strain they put on energy and water resources. Although my household only owns one car, and we don’t really fly anywhere, we make a lot of unnecessary trips. One of the biggest contributors to our mileage is trips to Duluth. Because we recently moved, we still have a lot of connections there, so we often end up going back and forth as many as 10 time a month. That is 120 trips a year, and even assuming a low estimate of 200 miles for the round trip, that totals 24,000 miles per year going back and forth to Duluth. There are many things we go to Duluth for that we could find replacements for closer to Rabun. For example, we still visit our old veterinarian in Buford, even though there are certainly veterinarians in the local area. Even if we were only able to reduce the number of trips to once per week, that would result in a reduction of 13,600 miles per year. Using the mileage for our car that we found in class, we can find the reduction in gallons of gas burned, we get a reduction of 503.7 gallons of gas per year. Going off of the US Energy Information Administration's estimate of carbon dioxide produced by burning gasoline, this would be a reduction of 8,905.42 pounds of carbon dioxide, as well as $1,661.71 that we wouldn’t spend on gas, going by the AAA average gas price in Rabun county."
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
				"body": "While water consumption doesn’t initially seem that bad, the issue is that any water we use has to then be filtered and cleaned in order to be reused. Beyond that, water use often drains effectively finite resources of water stored underground, depriving the local area of a vital resource. Because of this it is vital that we monitor the ways in which we consume water, and the sources from which it comes. My household gets water from groundwater, and the two sources that use the most water per day are the toilet and the sinks. Mr. Phillips has provided a myriad of helpful tips to reduce the amount of water the toilet uses per flush, such as putting a brick in the tank. Assuming a brick of the dimensions 8 inches x 3 inches x 2 inches, this would result in a displacement of 0.21 gallons of water, reducing the water usage per day by 2.4 gallons. This totals 876 gallons per year of water that we wouldn’t be using. The only suggestion I have to limit the amount of faucet water we use is to simply stay aware of time whenever the faucet is running. It’s easy to just turn on the faucet and waste a minute or two, but that’s an unnecessary outflow of more than a quarter gallon. By simply being conscientious, without any further effort, we could save those precious few gallons."
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
				"body": "Examining what we throw away shows us a lot about our impact on the environment. Not just what we contribute to landfills and recycling plants, but also what products we consume. Because our continued patronage of unsustainable products encourages industries to continue making them, in a way we are responsible not just for the cost of disposal, but also for the cost of creation. For many products, both of these processes are costly and rely on limited resources. The products that made up the majority of our garbage over the period that we measured were paper and plastic. We think of both of these as highly disposable products despite the fact that both take a long time to break down. Plastic is infamous for its permanence: it doesn’t break down naturally, and we have no real way to dispose of it aside from recycling it into new plastics. The recycling process is expensive and can produce toxic chemicals. Over time it also degrades the quality of the recycled plastic, making it further unsustainable, making the only real way to dispose of plastic to stop using it all together. Paper on the other hand is not much better. Not only does it take an enormous amount of water and energy to create paper, but it deprives us of another crucial resource: trees. Despite this, 42% of all global wood harvest goes towards paper. We cannot afford to treat either of these materials as disposable in the face of their impending consequences. While some of the waste directly from “disposable” products that we have bought, the vast majority of it enters our house in a way that is difficult to avoid: food wrapping. The first obvious step is to stop the little bit that we are directly contributing. No more solo cups, or paper towels, or anything else that could be replaced with a more permanent alternative. The simplest solution to the food packaging issue is to buy in bulk or shop somewhere that lets you bring your own containers. While I know that the Ingles in Franklin and Clayton sell nuts and things in bulk, I'm not sure that this is a feasible alternative for all of the products that we consume. Ultimately it is the best first step that I can think of, short of making everything we ever use from scratch."
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