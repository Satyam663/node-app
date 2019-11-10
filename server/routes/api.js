const express = require('express')
const router = express.Router()
const User = require('../model/model')
const mongoose = require('mongoose')
const db = "mongodb://localhost:27017/trainingdb"
mongoose.connect(db, err => {
    if (err) {
        console.log('error!'+err)
    } else {
        console.log('connected to mongodb')
    }
})

router.get('/',(req, res) => {
    res.send('from api')
})
/////api for registeration of customer
router.post('/register', (req, res) => {
    let userData = req.body
    console.log(userData)
    let user = new User(userData)
    
    user.save((error, registerUser) => {
        if (error) {
            console.log(error)
        } else {
            console.log(registerUser)
            res.status(200).send(registerUser)
        }
    })
})

////login
router.post('/login', (req, res) => {
    let UserData = req.body
    console.log(UserData[0].userName)
    console.log(UserData[0].password)
    var userName = UserData[0].userName
    var role = UserData[0].role
    console.log(role)

    User.findOne({userName, role},(error, user) => {
        console.log(user)
        if (error) {
            console.log(error)
        } else {
            if (!user) {
                res.status(401).send('Invalid username')
            } else 
            if (user.password !== UserData[0].password) {
                res.status(401).send('Invalid password')
            } else {
                res.status(200).send(user)
            }
            
        }
    })
})

// get all customer
router.get('/getall', (req, res) =>{
    // var role="Admin"
    User.find({},(err, result) => {
       if (err){
           console.log(err)
       } else {
           console.log(result)
           res.status(200).send(result);
       }
    
        
    })
    
})
module.exports = router