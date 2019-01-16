const supertest = require('supertest');
const server = require('./server');
const mongoose = require('mongoose');

//console.log(server);

describe('server', () => {
	it('test', () => {
		// request(todayRoutes).get('/').then((response) => {
		// 	expect(response.statusCode).toBe(200);
		// 	done();
		// })
		return supertest(server).get('/').expect(200);
	});

	beforeAll(() => {
		mongoose.connect(
			'mongodb://127.0.0.1:27017/today'

		);
	});
	afterAll((done) => {
		mongoose.disconnect(done);
	});



})


