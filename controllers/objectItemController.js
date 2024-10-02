const ObjectItem = require('../models/objectItemModel');

const addObjectItem = async (req, res) => {
  try {
    const {path,position,scale,rotation,image,fixRotation,fill} = req.body
    console.log("data",{path,position,scale,rotation,image,fixRotation,fill},req.body)
    const newItem = new ObjectItem(
        {path,position,scale,rotation,image,fixRotation,fill}
    )
    const item = await newItem.save()
    res.status(201).send("item");
  } catch (err) {
    console.error("Error creating object:", err);
    res.status(500).send({ message: "Internal server error" }); // Catch unhandled errors appropriately
  }
};

const editObjectItem = async (req, res) => {
  try {
    const {id} = req.params 
    const update = {path,position,scale,rotation,image,fixRotation,fill} = req.body
    const result = await ObjectItem.findOneAndUpdate({ _id: id }, { $set: update }, {new: true})
    
    console.log("data",result,id)
    res.status(200).send({id,result})
  } catch (err) {
    console.error("Error creating object:", err);
    res.status(500).send({ message: "Internal server error" }); // Catch unhandled errors appropriately
  }
};

const getObjectItems = async (req,res) => {
  try {
		const allObjects = await ObjectItem.find({})
		if (allObjects) {
			res.send(allObjects);
		} else {
			res.status(400).send({ message: "Error creating image" }); // Handle creation failures with a specific status code
		}
	} catch (err) {
		console.error("Error returning objects:", err);
		res.status(500).send({ message: "Internal server error" }); // Catch unhandled errors appropriately
	}
}

module.exports = { addObjectItem, getObjectItems, editObjectItem };