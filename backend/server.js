const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
// const mongoose = require("mongoose");
const todayRoutes = express.Router();
const PORT = 4000;

let Today = require("./today.model");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// mongoose.connect(
// 	"mongodb://127.0.0.1:27017/today",
// 	{ useNewUrlParser: true }
// );

// const connection = mongoose.connection;

// connection.once("open", function() {
// 	console.log("MogoDB database connection yoonu successfully!");
// });

app.get("/", (req, res) => {
	res.status(200).send("Hello World!");
	console.log("hello world!");
});

// todayRoutes.get("/", (req, res) => {
// 	Today.find((err, today) => {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			res.json(today);
// 		}
// 	});
// });

// todayRoutes.get('/today/:date', (req, res) => {
// 	const date = req.params.date;
// 	Today.findById(date, (err, today) => {
// 		res.json(today);

// 	});
// 	// console.log(req.params.date);
// })

// app.use("/today:date", todayRoutes);

app.listen(PORT, function() {
	console.log("Server is running on Port :" + PORT);
});

module.exports = app;
