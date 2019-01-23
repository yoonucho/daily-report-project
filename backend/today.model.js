const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Today = new Schema({
	today_time: {
		type: String,
		// 최적화 - 시스템자원을 쓰기 때문에 성능개선이 됨.
		index: true
	},
	today_action: {
		type: String
	}
});

module.exports = mongoose.model("Today", Today);
