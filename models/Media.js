var mongoose = require('mongoose');

var mediaSchema = new mongoose.Schema({
    name : String,
    profession: String,
    email: String,
    socialMedia: String,
    imageSrc: String
})

const Media = mongoose.model('Media', mediaSchema)
module.exports = Media