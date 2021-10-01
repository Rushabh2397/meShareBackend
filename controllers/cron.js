const cron = require('node-cron')
const Document = require('../models/document')
const moment = require('moment')
const async = require('async')
const Uploader = require('../support/uploader')
const path = require('path')
let _self = {

    removeFile: () => {
        async.waterfall([
            (nextCall) => {
                let aggregateQuery = []

                aggregateQuery.push({
                    $project: {
                        file_name: 1,
                        diff_in_hrs: {
                            $divide: [{ $subtract: [new Date(), "$created_at"] }, 3600000]

                        }
                    }
                })

                aggregateQuery.push(
                    {
                        $match: {
                            diff_in_hrs: { $gte: 1 }
                        }
                    }
                )

                Document.aggregate(aggregateQuery).exec((err, files) => {
                    if (err) {
                        return nextCall(err)
                    }
                    nextCall(null, files)
                })
            },
            (files, nextCall) => {
                async.map(files, (file, nextFile) => {
                    Document.findByIdAndDelete(file._id, (err) => {
                        if (err) {
                            nextFile(err)
                        }
                        let dst = path.join(__dirname, '../', 'uploads/document/' + file.file_name)
                        Uploader.removeWithoutCb(dst);
                        nextFile()
                    })
                }, (err, result) => {
                    if (err) {
                        return nextCall(err)
                    }
                    nextCall(null, null)
                })
            }
        ], (err, response) => {
            if (err) {
                console.log("err", err)
            }
        })
    },

    cronTask: () => {
        let task = cron.schedule('* * * * *', () => {
            _self.removeFile()
        }, {
            scheduled: false
        });

        task.start()
    }
}

module.exports = _self