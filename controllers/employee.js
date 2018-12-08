const axios = require('axios')
var fs = require('fs');

module.exports = {
    getEmployee : function(req, res){
        axios({
            type : 'GET',
            url: 'http://dummy.restapiexample.com/api/v1/employees'
        })
        .then(employees =>{
            console.log(employees)
            res.status(200).json(employees.data)
        })
        .catch(err=>{
            console.log(err)
            res.status(400).json(err)
        })
    },
    convertToBase64 : function(req,res){
        console.log(req.params)
        var imageFile = req.body.image
        // Convert the image data to a Buffer and base64 encode it.
        var encoded = Buffer.from(imageFile).toString('base64');
        res.status(200).json(encoded)
    }

}