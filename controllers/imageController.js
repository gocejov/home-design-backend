const Image = require("../models/imageModel")
const logger = require('../utils/logger');

const createImage = async (req,res) => {
	try {
        const {name,path} = req.data
		const newImage = new Image({
            name,path
        });
        await newImage.save();
		res.status(201).send("Image created successfully");
	} catch (err) {
		console.error("Error fetching Images:", err);
		res.status(500).send({ message: "Error retrieving Images" }); // Send a more informative error response
	}
};

const getImages = async (req,res) => {
	try {
		const images = Image.find();
        res.status(200).send(images)
	} catch (err) {
		console.error("Error creating Image:", err);
		res.status(500).send({ message: "Internal server error" }); // Catch unhandled errors appropriately
	}
};

module.exports = {createImage, getImages}