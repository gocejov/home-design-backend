const express = require("express");
const app = express();

//ROUTES
const objectRoutes = require("./routes/objectRoutes");
const imageRoutes = require("./routes/imageRoutes");
const userRoutes = require("./routes/userRoutes");
const fileRoutes = require("./routes/fileRoutes");

const connectDB = require("./config/db");

connectDB().then(() => {});

app.use(express.json());

app.use("/api/", objectRoutes);
app.use("/api/", imageRoutes);
app.use("/api/", userRoutes);
app.use("/api/", fileRoutes);

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.listen(3000, () => {
	console.log("Server running on port 3000");
});
