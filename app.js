const express = require('express')
const app = express()
const port = 3000
var mongoose = require('mongoose');
var cors = require('cors')

mongoose.connect('mongodb://localhost/businessCard');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connect to database")
});

var router = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use('/', router);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})

module.exports = app;