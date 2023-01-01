const express = require("express");
const { fileupload } = require("../controllers/fileupload");

const router = express.Router();

router.post("/fileupload",fileupload);
const multer = require('multer')
const upload = multer().single('file')

router.post('/profile', function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
    } else if (err) {
      // An unknown error occurred when uploading.
    }

    // Everything went fine.
  })
})

module.exports = router;