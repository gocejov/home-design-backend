const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config()

const DB_USER = process.env.DB_USER
const DB_PASSWORD= process.env.DB_PASSWORD
const DB_NAME= process.env.DB_NAME

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@homedesign.1aexr.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=HomeDesign`

// Connect to MongoDB using async/await
const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit the process on error
  }
};

// Ensure connection before starting the server
connectDB().then(() => {
  // ... Rest of your app logic ...
});

app.use(express.json());

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true }, // Ensure email uniqueness and required
});

const imagesSchema = new mongoose.Schema({
  name: String,
  path: String,
});

const User = mongoose.model('User', userSchema);
const Image = mongoose.model('Images', imagesSchema);

const createUser = async () => {
  try {
    const newUser = new User({ name: 'Alice', email: 'alice@example.com' });
    const savedUser = await newUser.save();
    return savedUser;
  } catch (err) {
    console.error("Error creating user:", err);
    return null; // Handle errors gracefully, return null if creation fails
  }
};

const createImage = async () => {
  try {
    const newImage = new Image({ name: 'Alice', path: 'image path' });
    const savedImage = await newImage.save();
    return savedImage;
  } catch (err) {
    console.error("Error creating image:", err);
    return null; // Handle errors gracefully, return null if creation fails
  }
};

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).send({ message: "Error retrieving users" }); // Send a more informative error response
  }
});

app.get("/create", async (req, res) => {
  try {
    const user = await createUser();
    if (user) {
      res.send([user]);
    } else {
      res.status(400).send({ message: "Error creating user" }); // Handle creation failures with a specific status code
    }
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).send({ message: "Internal server error" }); // Catch unhandled errors appropriately
  }
});

app.get("/image", async (req, res) => {
  try {
    const image = await createImage();
    if (image) {
      res.send(image);
    } else {
      res.status(400).send({ message: "Error creating image" }); // Handle creation failures with a specific status code
    }
  } catch (err) {
    console.error("Error creating image:", err);
    res.status(500).send({ message: "Internal server error" }); // Catch unhandled errors appropriately
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});