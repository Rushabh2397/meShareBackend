const async = require('async')
const Uploader = require('../support/uploader')
const Document = require('../models/document')
const path = require('path')

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
                async.mapSeries(files.doc, (k, nextFile) => {
                    if (k.type.indexOf('image') != -1) {
                        let fileName = Date.now() + k.name
                        async.series([
                            (cb) => {
                                let options = {
                                    dst: path.join(__dirname, '../', 'uploads/image/'),
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
                                    user_name: 'abc',
                                    type: 'image',
                                    file_name: fileName,
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
                                    user_name: 'abc',
                                    type: 'doc',
                                    file_name: fileName,
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
                    user_name: 'abc',
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
    }
}