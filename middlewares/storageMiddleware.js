const multer = require("multer");

const memoryStorage = multer.memoryStorage();

const diskStorage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "uploads/"); // Destination folder for uploaded files
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
		cb(
			null,
			file.fieldname +
				"-" +
				uniqueSuffix +
				path.extname(file.originalname)
		); // File name format
	},
});

const uploadFile = (memory = false)=>{
  const storage = memory ? memoryStorage : diskStorage
  return multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Max file size: 5MB
    fileFilter: (req, file, cb) => {
      const allowedTypes = /jpeg|jpg|png|gif/;
      const extname = allowedTypes.test(
        path.extname(file.originalname).toLowerCase()
      );
      const mimetype = allowedTypes.test(file.mimetype);
  
      if (extname && mimetype) {
        return cb(null, true);
      } else {
        cb(new Error("Only images (jpeg, jpg, png, gif) are allowed"));
      }
    },
  });
}

module.exports = uploadFile;
