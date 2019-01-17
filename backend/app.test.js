const request = require("supertest");
const app = require("./app");

describe("Test the root path", () => {
	it("It should response the Get method", done => {
		request(app)
			.get("/")
			.then(response => {
				expect(response.statusCode).toBe(200);
				done();
			});
	});
});
