const express = require("express");
const app = express();

//ROUTES
const objectRoutes = require('./routes/objectRoutes');
const imageRoutes = require('./routes/imageRoutes');
const userRoutes = require('./routes/userRoutes');


const connectDB = require('./config/db');

connectDB().then(() => {
	// ... Rest of your app logic ...

})

app.use(express.json());

app.use("/api/", objectRoutes);
app.use("/api/", imageRoutes);
app.use("/api/", userRoutes);
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(3000, () => {
	console.log("Server running on port 3000");
});
