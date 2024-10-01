const mongoose = require('mongoose');

const objectSchema = new mongoose.Schema({
	path: {
		type: String,
		required: true,
	},
	position: {
		type: [Number], // An array of numbers
		default: [0.0, 0.0, 0.0], // Default position
	},
	scale: {
		type: [Number], // An array of numbers
		default: [1, 1, 1], // Default scale
	},
	rotation: {
		type: [Number], // An array of numbers
		default: [0.0, 0.0, 0.0], // Default rotation
	},
	image: {
		type: String, // Image could be a URL or a base64 string
		required: false,
	},
	fixRotation: {
		type: Number, // Image could be a URL or a base64 string
		default: 0,
	}
});

module.exports = mongoose.model("ObjectItem", objectSchema)