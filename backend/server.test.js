const request = require('supertest');
const server = require('./server');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const todayRoutes = express.Router();
const PORT = 4000;
const app = express();


describe('server', () => {
	it('test', () => {
		app.use(cors());
		app.use(express.json());
		// request(todayRoutes).get('/').then((response) => {
		// 	expect(response.statusCode).toBe(200);
		// 	done();
		// })
		// return request(todayRoutes).get('/').expect(200);
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


