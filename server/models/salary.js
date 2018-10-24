let mongoose = require('mongoose')

let Salary = mongoose.model('Salary', {
    name: {
        type: String,
        required: true
    },
    eid:{
        type:String,
        required:true
    },
    base:{
        type:Number,
        required:true
    },
    gross:{
        type:Number,
        required:true
    },
    hra:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    da: {
        type: Number,
        required: true
    },
    it: {
        type: Number,
        required: true
    },
    net: {
        type: Number,
        required: true
    }
})

module.exports = { Salary }