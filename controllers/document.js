const async = require('async')
const Uploader = require('../support/uploader')
const Document = require('../models/document')
const path = require('path')
const config = require('../config')
const { validationResult } = require('express-validator')
const isUrl = require('is-url')
module.exports = {

    addDocuments: (req, res) => {
        async.waterfall([
            (nextCall) => {
                Uploader.getFormData(req, nextCall)
            },
            (fields, files, nextCall) => {
                if (Object.keys(files).length === 0) {
                    return nextCall({
                        "message": 'Missing parameters'
                    })
                }
                nextCall(null, fields, files);
            },
            (fields, files, nextCall) => {
                if (!Array.isArray(files.doc)) {
                    files.doc = [files.doc]
                }
                async.mapSeries(files.doc, (k, nextFile) => {
                    if (k.type.indexOf('image') != -1) {
                        let fileName = Date.now() + k.name
                        async.series([
                            (cb) => {
                                let options = {
                                    dst: path.join(__dirname, '../', 'uploads/document/'),
                                    src: k.path,
                                    fileName: fileName
                                }
                                Uploader.upload(options, cb)
                            },
                            (cb) => {
                                Uploader.remove(k.path, cb)
                            },
                            (cb) => {
                                let doc = new Document({
                                    // user_name: req.user._id,
                                    type: 'image',
                                    file_name: fileName,
                                    original_name: k.name
                                })
                                doc.save((err, data) => {
                                    if (err) {
                                        return cb
                                    }
                                    cb()
                                })
                            }
                        ], (err, resu) => {
                            if (err) {
                                return nextFile(err)
                            }
                            nextFile()
                        })

                    } else if (k.type.indexOf('application') != -1 || k.type.indexOf('text') != -1) {
                        let fileName = Date.now() + k.name
                        async.series([
                            (cb) => {
                                let options = {
                                    dst: path.join(__dirname, '../', 'uploads/document/'),
                                    src: k.path,
                                    fileName: fileName
                                }
                                Uploader.uploadFile(options, cb)
                            },
                            (cb) => {
                                Uploader.remove(k.path, cb)
                            },
                            (cb) => {
                                let doc = new Document({
                                    //user_name: req.user_id,
                                    type: 'doc',
                                    file_name: fileName,
                                    original_name: k.name
                                })
                                doc.save((err, data) => {
                                    if (err) {
                                        return cb
                                    }
                                    cb()
                                })
                            }
                        ], (err, resul) => {
                            if (err) {
                                return nextFile(err)
                            }
                            nextFile()
                        })
                    } else {
                        nextFile()
                    }
                }, (err, result) => {
                    if (err) {
                        return nextCall(err)
                    }
                    nextCall()
                })
            }

        ], (err, response) => {
            if (err) {
                return res.status(400).json({
                    message: (err && err.message) || 'Oops! Failed to upload.'
                })
            }
            res.json({
                status: 'success',
                message: 'Uploaded successfully.'
            })
        })
    },

    addUrl: (req, res) => {
        async.waterfall([
            (nextCall) => {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return nextCall({ message: errors.errors[0].msg });
                }
                nextCall(null, req.body)
            },
            (body, nextCall) => {
                let url = new Document({
                    user_name: req.user._id,
                    type: 'url',
                    url: body.url,
                })

                url.save((err, data) => {
                    if (err) {
                        return nextCall(err)
                    }
                    nextCall(null, data)
                })
            }
        ], (err, response) => {
            if (err) {
                return res.status(400).json({
                    message: (err && err.message) || 'Oops! Failed to add url.'
                })
            }
            res.json({
                status: 'success',
                message: 'Url added successfully.'
            })
        })
    },

    getAllFiles: (req, res) => {
        async.waterfall([
            (nextCall) => {
                Document.find({}).sort({ created_at: -1 }).exec((err, images) => {
                    if (err) {
                        return nextCall(err)
                    }
                    images.map(img => {
                        img.file_name = config.docUrl + 'document/' + img.file_name
                    })

                    nextCall(null, images)
                })
            }
        ], (err, response) => {
            if (err) {
                return res.status(400).json({
                    message: (err && err.message) || 'Oops! Failed to get images.'
                })
            }

            res.json({
                status: 'success',
                message: 'Image list.',
                data: response
            })
        })
    },

    getDocs: (req, res) => {
        async.waterfall([
            (nextCall) => {
                Document.find({ type: 'doc' }).sort({ created_at: -1 }).exec((err, doc) => {
                    if (err) {
                        return nextCall(err)
                    }
                    doc.map(doc => {
                        doc.file_name = config.docUrl + 'document/' + doc.file_name
                    })

                    nextCall(null, doc)
                })
            }
        ], (err, response) => {
            if (err) {
                return res.status(400).json({
                    message: (err && err.message) || 'Oops! Failed to get documents.'
                })
            }

            res.json({
                status: 'success.',
                message: 'Document list.',
                data: response
            })
        })
    },

    getUrl: (req, res) => {
        async.waterfall([
            (nextCall) => {
                Document.find({ type: 'url' }).sort({ created_at: -1 }).exec((err, urls) => {
                    if (err) {
                        return nextCall(err)
                    }

                    nextCall(null, urls)
                })
            }
        ], (err, response) => {
            if (err) {
                return res.status(400).json({
                    message: (err && err.message) || 'Oops! Failed to get urls.'
                })
            }

            res.json({
                status: 'success',
                message: 'urls list.',
                data: response
            })
        })
    },

    addUserText: (req, res) => {
        async.waterfall([
            (nextCall) => {
                if (!req.body.text) {
                    return nextCall({
                        message: 'Text is reqiured.'
                    })
                }
                nextCall(null, req.body)
            },
            (body, nextCall) => {
                let type = isUrl(body.text) ? 'url' : 'text';
                let doc = new Document({
                    type: type,
                    text: body.text
                })

                doc.save((err,savedText)=>{
                    if(err){
                        return nextCall(err)
                    }
                    nextCall(null,savedText)
                })
            }
        ], (err, response) => { 
            if(err){
                return res.status(400).json({
                    message : (err && err.message) || 'Oops! Failed to save the text.'
                })
            }

            res.json({
                status:'success',
                message :'Text/Url saved.',
                data: response
            })
        })
    }
}