const mongoose = require('mongoose')
const connection = require('../db/connection')
const moment = require('moment')
const { encrypt } = require('../utils/encrypt_decrypt')

let schema = new mongoose.Schema({
    email:{
        type: String
    },
    password:{
        type: String
    },
    created_at: {
        type: Date,
        default: moment().unix()*1000
    },
    updated_at: {
        type: Date,
        default: moment().unix()*1000
    }
},{
    collection : 'users'
})

schema.pre('save',function(){
    let user = this;
    user.password= encrypt(user.password)
    user.created_at=user.updated_at= moment().unix()*1000
})

module.exports = mongoose.model(schema.obj.collection,schema)

