const User = require("../models/userModel")

const createUser = async (req,res) => {
	try {
        const {name,email} = req.data
		const newUser = new User({
            name,email
        });
        const user = await newUser.save();
		res.send(user);
	} catch (err) {
		console.error("Error fetching users:", err);
		res.status(500).send({ message: "Error retrieving users" }); // Send a more informative error response
	}
};

const getUsers = async (req,res) => {
	try {
		const users = User.find();
        res.send(users)
	} catch (err) {
		console.error("Error creating user:", err);
		res.status(500).send({ message: "Internal server error" }); // Catch unhandled errors appropriately
	}
};

module.exports = {createUser, getUsers}