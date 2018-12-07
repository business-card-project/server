'use strict'
const employeeController = require('../controllers/employee')
const express = require('express'),
      router = express.Router(),
      images = require('../helpers/images')

/* GET main endpoint. */
router.get('/', (req, res, next) => {
  res.send({ message: 'Welcome Buddy!' })
})

router.post('/upload',
  images.multer.single('image'), 
  images.sendUploadToGCS, (req, res) => {
    res.send({
      status: 200,
      message: 'Your file is successfully uploaded',
      link: req.file.cloudStoragePublicUrl
    })
})

router.get('/employee', employeeController.getEmployee)
router.post('/render', employeeController.convertToBase64)

module.exports = router
