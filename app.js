const express = require("express");
const https = require("https");
const ejs = require("ejs");

const app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {

	https.get("https://zenquotes.io/api/random", function(response) {
		response.on("data", function(data) {
			const quote = JSON.parse(data);
			//console.log(quote[0].q);
			res.render("home", {quote: quote[0].q, author: quote[0].a});
		})
	});
})
app.listen(process.env.PORT || 3000, function() {
	console.log("Server running on port 3000");
})