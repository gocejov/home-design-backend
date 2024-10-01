const express = require("express");
const router = express.Router();
const uploadFile  = require("../middlewares/storageMiddleware");
const { singleFileUpload, multipleFilesUpload, uploadFileInMemory } = require("../controllers/fileController");

const upload = uploadFile()
const uploadMemory = uploadFile(true)

router.post("/upload", upload.single("file"), singleFileUpload);
router.post('/upload-multiple', upload.array('files', 5), multipleFilesUpload);
router.post('/upload-memory', uploadMemory.single('file'), uploadFileInMemory);

module.exports = router