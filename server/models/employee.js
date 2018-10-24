let mongoose = require('mongoose')

let Employee = mongoose.model('Employee', {
    name: {
        type: String,
        required: true
    },
    eid: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    do_join: {
        type: Date,
        required: true
    },
    dept:{
        type:String,
        required:true
    },
    pos:{
        type:String,
        required:true
    }
})

module.exports = { Employee }