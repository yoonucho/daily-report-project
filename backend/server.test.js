const request = require("supertest");
const server = require("./server");
// const mongoose = require("mongoose");

console.dir(server);

describe("Test the root path", () => {
	test("It should response the Get method", () => {
		// request(server)
		// 	.get("/")
		// 	.then(response => {
		// 		expect(response.statusCode).toBe(200);
		// 		done();
		// 	});
		return request(server)
			.get("/")
			.expect(200);
	});

	// beforeAll(() => {
	// 	mongoose.connect("mongodb://127.0.0.1:27017/today");
	// });

	// afterAll(done => {
	// 	mongoose.disconnect(done);
	// });
});
