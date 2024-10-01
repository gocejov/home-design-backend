const express = require("express");
const router = express.Router();
const { uploadFile } = require("../middleware/storageMiddleware");
const { singleFileUpload, multipleFilesUpload, uploadFileInMemory } = require("../controller/fileController");

router.post("/upload", uploadFile().single("file"), singleFileUpload);
router.post('/upload-multiple', uploadFile.array('files', 5), multipleFilesUpload);
app.post('/upload-memory', uploadFile(true).single('file'), uploadFileInMemory);