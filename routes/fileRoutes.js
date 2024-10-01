const express = require("express");
const router = express.Router();
const {uploadFile,uploadModelFile}  = require("../middlewares/storageMiddleware");
const { singleFileUpload, multipleFilesUpload, uploadFileInMemory } = require("../controllers/fileController");

const upload = uploadFile()
const uploadMemory = uploadFile(true)
const uploadModel = uploadModelFile()
const uploadMemoryModel = uploadModelFile(true)

router.post("/upload", upload.single("file"), singleFileUpload);
router.post('/upload-multiple', upload.array('files', 5), multipleFilesUpload);
router.post('/upload-memory', uploadMemory.single('file'), uploadFileInMemory);

router.post("/model/upload", uploadModel.single("file"), singleFileUpload);
router.post('/model/upload-multiple', uploadModel.array('files', 5), multipleFilesUpload);
router.post('/model/upload-memory', uploadMemoryModel.single('file'), uploadFileInMemory);

module.exports = router