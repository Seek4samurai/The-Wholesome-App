const UploadModel = require('../model/schema');
const fs = require('fs')

exports.home = (req, res) => {
  res.render("main")
};

exports.uploads = (req, res, next) => {
  const files = req.files;
  if (!files) {
    const error = new Error('Please choose a file');

    error.httpStatusCode = 400;
    return next(error);
  }
  // Images to base64
  let imgArray = files.map((file) => {
    let img = fs.readFileSync(file.path);
    console.log(img);
    return encodeImg = img.toString('base64')
  })

  imgArray.map((src, index) => {
    // object to store
    let finalImg = {
      filename: files
    }
  });
  res.json(files);
};
