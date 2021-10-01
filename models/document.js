const mongoose = require('mongoose')
const connection = require('../db/connection')
const moment = require('moment')

let schema = new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId
    },
    type:{
        type: String
    },
    original_name:{
        type: String
    },
    file_name:{
        type: String
    },
    text :{
        type: String
    },
    created_at: {
        type: Date,
        default: moment().unix()*1000
    }
},{
    collection : 'document'
})

schema.pre('save',function(){
    let document = this;
    document.created_at = moment().unix()*1000
})

module.exports = mongoose.model('Document',schema)

