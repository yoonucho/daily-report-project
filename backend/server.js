const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const todayRoutes = express.Router();
const PORT = 4000;

let Today = require("./today.model");

app.use(cors());
app.use(express.json());

mongoose.connect(
	"mongodb://127.0.0.1:27017/today",
	{ useNewUrlParser: true, useCreateIndex: true }
);
// Deprecation Warnings 코드 추가
mongoose.set({ useNewUrlParser: true }, { useCreateIndex: true });

const connection = mongoose.connection;

connection.once("open", function() {
	console.log("MogoDB database connection yoonu successfully!");
});

// todayRoutes.get("/", (req, res) => {
// 	res.status(200).send("Hello World! yeah!");
// });

todayRoutes.get("/", (req, res) => {
	// 최적화 - find시 _id를 안보이게 설정
	Today.find((err, today) => {
		if (err) {
			console.log(err);
		} else {
			res.json(today);
		}
	}).select({ _id: 0 });
});

// todayRoutes.get("/today/:date", (req, res) => {
// 	const date = req.params.date;
// 	Today.findById(date, (err, today) => {
// 		res.json(today);
// 	});
// });

todayRoutes.put("/", (req, res) => {
	let today = new Today(req.body);
	today
		.save()
		.then(today => {
			res.status(200).send({ today: "today put successfully!" });
		})
		.catch(err => {
			res.status(400).send("put new today failed!");
		});
});

// app.use("/today/:date", todayRoutes);

// mongoose test환경시 실행안되는 코드
if (process.env.NODE_ENV !== "test") {
	app.listen(PORT);
	console.log("Server is running on Port :" + PORT);
}

app.use("/", todayRoutes);

module.exports = app;
