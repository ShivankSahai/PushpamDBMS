let express = require('express')
let bodyParser = require('body-parser')

let { mongoose } = require('./db/mongoose.js')

let { Employee } = require('./models/employee.js')
let { Salary } = require('./models/salary.js')
let { Attendance } = require('./models/attendance.js')

let app = express()
let port = process.env.PORT || 3000

app.use(bodyParser.json())

app.get('/employees', (req, res) => {
    Employee.find().then((employees) => {
        res.send({ employees })
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.get('/salary', (req, res) => {
    Salary.find().then((salaries) => {
        res.send({ salaries })
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.get('/attendance', (req, res) => {
    Attendance.find().then((attendances) => {
        res.send({ attendances })
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.post('/employees', (req, res) => {
    let employee = new Employee({
        name: req.body.name,
        eid: req.body.eid,
        gender: req.body.gender,
        email: req.body.email,
        address: req.body.address,
        dob:req.body.dob,
        do_join:req.body.do_join,
        dept:req.body.dept,
        pos:req.body.pos
    })

    employee.save().then((doc) => {
        res.send(doc)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.post('/salary', (req, res) => {
    let salary = new Salary({
        name: req.body.name,
        eid: req.body.eid,
        base: req.body.base,
        gross: req.body.gross,
        hra: req.body.hra,
        date:req.body.date,
        da:req.body.da,
        it:req.body.it,
        net:req.body.net
    })

    salary.save().then((doc) => {
        res.send(doc)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.post('/attendance',(req,res)=>{
    let attendance=new Attendance({
        date:req.body.date,
        enames:[]
    })

    attendance.save().then((doc) => {
        res.send(doc)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.listen(port)