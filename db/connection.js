const mongoose = require('mongoose')
const config = require('../config')

let connection = mongoose.connect(config.connectionString, { useNewUrlParser: true,useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

mongoose.connection.on('error',(err)=>console.log("DB error:",err))

module.exports = connection