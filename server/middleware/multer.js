const multer = require('multer');

// Set Storage
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'server/uploads')
  },
  filename: function (req, file, cb) {
    var ext = file.originalname.substring(file.originalname.lastIndexOf('.'));
    cb(null, file.fieldname + '-' + Date.now() + ext);
  }
});

module.exports = store = multer({ storage });