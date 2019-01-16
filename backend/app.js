const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.status(200).send("Hello World");
	console.log("Hello World");
});

// app.listen(4000, () => {
// 	console.log("Example app listening on port 4000!");
// });

module.exports = app;
