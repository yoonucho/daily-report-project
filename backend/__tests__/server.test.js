const request = require("supertest");
const app = require("../server");
const mongoose = require("mongoose");
const Today = require("../today.model");

// console.log(app);

describe("Test the root path", () => {
	test("Response the Get method", done => {
		request(app)
			.get("/")
			.expect("Content-type", /json/)
			.expect(200);
		done();
	});

	test("Response the Get method for /today/:date", done => {
		request(app)
			.get("/today/:date")
			.expect("Content-type", /json/)
			.expect(200);
		Today.find((err, today) => {
			if (err) {
				console.log(err);
			} else {
				res.json(today);
			}
		});
		done();
	});

	// error
	// test("Response the Put method for  /today/:date", done => {
	// 	request(app)
	// 		.put("/today/:date")
	// 		.send(Today)
	// 		.expect("Content-type", /json/)
	// 		.expect(200);
	// 	const date = req.params.date;
	// 	Today.findOne(date, (err, today) => {
	// 		res.json(today);
	// 	});
	// 	done();
	// });

	describe("Mongoose connect", () => {
		beforeAll(() => {
			mongoose.connect("mongodb://127.0.0.1:27017/today");
			console.log("MogoDB database connection yoonu successfully!");
		});

		afterAll(done => {
			mongoose.disconnect(done);
		});
	});
});
