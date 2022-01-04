const UploadModel = require('../model/schema');
const fs = require('fs')

exports.home = async (req, res) => {
  const all_Images = await UploadModel.find();
  res.render("main", { images: all_Images })
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

  let result = imgArray.map((src, index) => {
    // object to store
    let finalImg = {
      filename: files[index].originalname,
      contentType: files[index].mimetype,
      imageBase: src
    }
    let newUpload = new UploadModel(finalImg);
    return newUpload
      .save().then(() => {
        return { msg: `${files[index].originalname} Image uploaded!` }
      })
      .catch(error => {
        if (error) {
          if (error.name == "MongoError" && error.code === 11000) {
            return Promise.reject({
              error: "Duplicate " `${files[index].originalname}.File Already exist`
            })
          }
          return Promise.reject({ error: error.message || `Cannot upload ${files[index].originalname} Somethings wrong` })
        }
      })
  });
  Promise.all(result)
    .then(msg => [
      res.redirect('/')
    ])
    .catch(err => {
      res.json(err)
    })
};
