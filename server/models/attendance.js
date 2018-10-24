let mongoose = require('mongoose')

let Attendance = mongoose.model('Attendance', {
    date:{
        type:Date,
        required:true
    },
    enames:{
        type:Array,
        required:true
    }
})

module.exports = { Attendance }