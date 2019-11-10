const express = require('express')
const router = express.Router()
const Transaction = require('../model/transaction')




// api for registeration of customer
router.post('/register', (req, res) => {
    let userTransaction = req.body
    console.log(userTransaction)
    let tx = new Transaction(userTransaction)
    console.log()
    tx.save((error, result) => {
        if (error) {
            console.log(error)
        } else {
            console.log(result)
            res.status(200).send(result)
        }
    })
})

// ////login
// router.post('/login', (req, res) => {
//     let UserData = req.body
//     console.log(UserData[0].userName)
//     console.log(UserData[0].password)
//     var userName = UserData[0].userName
//     var role = UserData[0].role
//     console.log(role)

//     Transaction.findOne({userName, role},(error, user) => {
//         console.log(user)
//         if (error) {
//             console.log(error)
//         } else {
//             if (!user) {
//                 res.status(401).send('Invalid username')
//             } else 
//             if (user.password !== UserData[0].password) {
//                 res.status(401).send('Invalid password')
//             } else {
//                 res.status(200).send(user)
//             }
            
//         }
//     })
// })

// get all customer
router.get('/getall', (req, res) =>{
    // var role="Admin"
    Transaction.find({},(err, result) => {
       if (err){
           console.log(err)
       } else {
           console.log(result)
           res.status(200).send(result);
       }
    
        
    })
    
})
module.exports = router