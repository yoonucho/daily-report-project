const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Today = new Schema({
	today_time: {
		type: Date
	},
	today_action: {
		type: String
	}
})

module.exports = mongoose.model('Today', Today);