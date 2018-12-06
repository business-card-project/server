const User = require('../models/User')
const jwt = require('jsonwebtoken')
const {compareCrypt} = require('../helpers/bcrypt')
const axios = require('axios')
require('dotenv').config()

class UserController {
    static register(req, res) {
        let user = new User({
            username:  req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        user.save()
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(400).json({message: err.message})
            })
    }

    static login(req, res) {
        User.findOne({
            email: req.body.email
        })
            .then((user) => {
                if (!user) {
                    res.status(400).json({message: "user not found, please register first"})
                } else {
                    if (compareCrypt(req.body.password, user.password)){
                        let token = jwt.sign({ email: user.email}, process.env.userSecretJWT);
                        res.status(200).json({ token })
                    } else {
                        res.status(400).json({message: "email or password is incorrect"})
                    }                
                }
            })
            .catch((err) => {
                res.status(400).json(err.message)
            })
    }

}

module.exports = UserController