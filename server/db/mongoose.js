let mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://Pushpam:pushpam123@ds241133.mlab.com:41133/salary_management' || 'mongodb://localhost:27017/TodoApp')

module.exports={mongoose}