const request = require("supertest");
const app = require("../server");
const mongoose = require("mongoose");
// const Today = require("./today.model");
// console.log(app);

describe("Test the root path", () => {
	test("Response the Get method", done => {
		request(app)
			.get("/")
			.expect("Content-type", /json/)
			.expect(200);
		done();
	});

	describe("Mongoose connect", () => {
		beforeAll(() => {
			mongoose.connect("mongodb://127.0.0.1:27017/today");
			console.log("MogoDB database connection yoonu successfully!");
		});
		test("Find data from test database", () => {
			// request(app)
			// 	// .find()
			// 	.exec(500);
		});

		afterAll(done => {
			mongoose.disconnect(done);
		});
	});
});
