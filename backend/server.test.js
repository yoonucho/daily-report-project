const request = require("supertest");
const app = require("./server");
// const mongoose = require("mongoose");
// const server = request.agent("http://localhost:4000");
// console.dir(server);

describe("Test the root path", () => {
	test("Response the Get method", done => {
		request(app)
			.get("/")
			.expect("Content-type", /json/)
			.expect(200);
		done();
	});

	// beforeAll(() => {
	// 	mongoose.connect("mongodb://127.0.0.1:27017/today");
	// });

	// afterAll(done => {
	// 	mongoose.disconnect(done);
	// });
});
