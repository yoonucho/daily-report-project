const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todayRoutes = express.Router();
const PORT = 4000;

let Today = require('./today.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
	'mongodb://127.0.0.1:27017/today',
	{ useNewUrlParser: true }
);

const connection = mongoose.connection;

connection.once('open', function () {
	console.log('MogoDB database connection yoonu successfully!');
});

todayRoutes.route('/').get(function (req, res) {
	Today.find(function (err, today) {
		if (err) {
			console.log(err);
		} else {
			res.json(today);
		}
	})
})

todayRoutes.route('/today/:date').get(function (req, res) {
	console.log(req.params.date);
})

app.use("/today", todayRoutes);

app.listen(PORT, function () {
	console.log("Server is running on Port :" + PORT);
})