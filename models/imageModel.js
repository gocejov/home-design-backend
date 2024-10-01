const mongoose = require('mongoose')

const imagesSchema = new mongoose.Schema({
	name: String,
	path: String,
});

module.exports = mongoose.model("Image", imagesSchema)