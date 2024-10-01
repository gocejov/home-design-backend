const logger = require('../utils/logger');

const singleFileUpload = (req, res) => {
	if (!req.file) {
        logger.error("No file uploaded.")
        return res.status(400).send("No file uploaded.");
	}

    logger.info("File uploaded successfully.")
	res.send(`File uploaded successfully: ${req.file.filename}`);
};

const multipleFilesUpload = (req, res) => {
    if (!req.files || req.files.length === 0) {
      return res.status(400).send('No files uploaded.');
    }
    
    const fileNames = req.files.map(file => file.filename);
    res.send(`Files uploaded successfully: ${fileNames.join(', ')}`);
  }

  const uploadFileInMemory = (req, res) => {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }
  
    // File data is available in req.file.buffer
    console.log(req.file.buffer);
  
    res.send('File uploaded and saved to memory!');
  }

module.exports = {singleFileUpload, multipleFilesUpload, uploadFileInMemory}