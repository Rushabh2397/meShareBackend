const async = require('async');
const user = require('../models/user');
const User = require('../models/user')
const { decrypt, encrypt } = require('../utils/encrypt_decrypt')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('../config')
module.exports = {

    register: (req, res) => {
        async.waterfall([
            (nextCall) => {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return nextCall({ message: errors.errors[0].msg });
                }
                nextCall(null, req.body)
            },
            (body, nextCall) => {
                User.findOne({ email: body.email }, (err, user) => {
                    if (err) {
                        nextCall(err)
                    } else if (user) {
                        nextCall({ message: 'Email already exist.' })
                    } else {
                        nextCall(null, body)
                    }
                })
            },
            (body, nextCall) => {
                req.body.email = req.body.email.toLowerCase();
                let user = new User(body)
                user.save((err, data) => {
                    if (err) {
                        return nextCall(err)
                    }
                    nextCall(null, data)
                })
            }
        ], (err, response) => {
            if (err) {
                return res.status(400).json({
                    message: (err && err.message) || 'Oops! Failed to register user. '
                })
            }

            res.json({
                status: 'success',
                message: 'User registered successfully.',
                data: response
            })
        })
    },
    login: (req, res) => {
        async.waterfall([
            (nextCall) => {
                req.body.email = req.body.email.toLowerCase();
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return nextCall({ message: errors.errors[0].msg });
                }
                nextCall(null, req.body)
            },
            (body, nextCall) => {
                User.findOne({ email: body.email }, (err, user) => {
                    if (err) {
                        return nextCall(err)
                    } else if (!user) {
                        return nextCall({ message: 'Please check your username and password.' })
                    } else {
                        let result = decrypt(body.password, user.password)
                        if (result) {
                            nextCall(null, user)
                        } else {
                            return nextCall({ message: 'Please check your username and password.' })
                        }
                    }
                })
            },
            (user, nextCall) => {
                let jwtData = {
                    _id: user._id,
                    email: user.email
                }
                user = user.toJSON()
                user.token = jwt.sign(jwtData, config.secret, {
                    expiresIn: 60 * 60 * 24
                })
                delete user['password']
                nextCall(null, user)
            }
        ], (err, response) => {
            if (err) {
                return res.status(400).json({
                    message: (err && err.message) || 'Oops! Failed to login. '
                })
            }

            res.json({
                status: 'success',
                message: 'User logged in successfully.',
                data: response
            })
        })
    },

    changePassword : (req, res) => {
        async.waterfall([
            (nextCall) => {
                if (!req.body.password || !req.body.newPassword) {
                    return nextCall({
                        message: 'All fileds are required.'
                    })
                }

                nextCall(null, req.body)
            },
            (body, nextCall) => {
                User.findById(req.user._id, (err, user) => {
                    if (err) {
                        return nextCall(err)
                    }
                    nextCall(null, body,user)
                })
            },
            (body,user, nextCall) => {
                let passwordMatched = decrypt(body.password, user.password)
                let newPassword = encrypt(body.newPassword)
                if (passwordMatched) {
                    User.findByIdAndUpdate(user._id, { password: newPassword }, (err, updatedUser) => {
                        if (err) {
                            return nextCall(err)
                        }
                        nextCall(null, null)
                    })
                } else {
                    nextCall({
                        message: "Your old password doesn't match."
                    })
                }
            }
        ], (err, response) => {
            if (err) {
                return res.status(400).json({
                    message: (err && err.message) || 'Oops! Failed to update password.'
                })
            }

            res.json({
                status: 'success',
                message: 'Password updated successfully.'
            })
        })
    }
}