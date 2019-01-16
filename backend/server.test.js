const request = require("supertest");
const server = require("./server");
const express = require("express");
const cors = require("cors");
// const mongoose = require("mongoose");
// const todayRoutes = express.Router();
const PORT = 4000;
const app = express();

describe("server~", () => {
	app.use(cors());
	app.use(express.json());
	test("test test", () => {
		// request(app)
		// 	.get("/")
		// 	.expect(200);
		// .end((err, res) => {
		// 	if (err) throw err;
		// });
		request(app)
			.get("/")
			.send("hello world!")
			.expect(200);
	});
	test("oh no..", done => {
		request(app).expect(404, done);
	});

	// beforeAll(() => {
	// 	mongoose.connect("mongodb://127.0.0.1:27017/today");
	// });
	// afterAll(done => {
	// 	mongoose.disconnect(done);
	// });
});
