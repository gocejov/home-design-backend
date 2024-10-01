
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: String,
	email: { type: String, unique: true, required: true }, // Ensure email uniqueness and required
});

module.exports = mongoose.model("User", userSchema)
