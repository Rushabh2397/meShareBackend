const formidable = require('formidable');
const path = require('path')
const fse = require('fs-extra');
const sharp = require('sharp');

module.exports = {

    getFormData: (req, cb) => {
        //console.log("req",req)
        let form = formidable.IncomingForm()
        form.multiples = true;
        form.uploadDir = path.join(__dirname, '../../', 'uploads/temp')
        fse.ensureDir(form.uploadDir, (err) => {
            if (err) {
                console.log("err",err)
                return cb(err)
            }

            form.parse(req, (err, fields, files) => {
                if (err) {
                    console.log("err",err)
                    return cb(err)
                }
                cb(null, fields, files)
            })

        })
    },

    upload: (options, cb) => {
        fse.ensureDir(options.dst, (err) => {
            if (err) {
                return cb(err)
            }
            sharp(options.src)
                .toFile(options.dst+options.fileName, (err, data) => {
                    if (err) {
                        return cb(err)
                    }
                    cb()
                })
        })
    },

    uploadFile: (options, cb) => {
        fse.ensureDir(options.dst, (err) => {
          if (err) {
            return callback(err)
          }
          let dst = options.dst + options.fileName 
          fse.copy(options.src, dst , err => {
            if (err) return cb(err)
            cb()
          })
        })
    },

    remove :(dst,cb)=>{
        fse.remove(dst,(err)=>{
            if(err){
                return cb(err)
            }
            cb()
        })
    },
    removeWithoutCb :(dst)=>{
        fse.removeSync(dst)
    }
}