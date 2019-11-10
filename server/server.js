const express =require('express');
var bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const api = require('./routes/api')
const transaction = require('./routes/transaction')
var app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', api)
app.use('/transaction', transaction)
app.get('/',(req,res)=>{
    res.send('hello world')
})






app.listen(3000,(err)=>{
    if(!err){
        console.log('server successfully started');

    }
    else{
        console.log('server down');
    }

})


// //get all the customer
// app.get('/getAllCustomer', (req, res) => {
//     mysqlConnection.query('select * from user where role="Customer"',(err,rows,field)=>{
//         if(!err){
//             console.log(rows);
//             res.send(200,rows);
    
//         }  
//         else{
//             console.log(err)
//         }
//         })
// }); 
// //get all the admin
// app.get('/getAllAdmin', (req, res) => {
//     mysqlConnection.query('select * from user where role="Admin"',(err,rows,field)=>{
//         if(!err){
//             console.log(rows);
//             res.send(200,rows);
    
//         }  
//         else{
//             console.log(err)
//         }
//         })
// }); 
// //Register the Customer to the database
// // app.post('/registerCustomer', (req, res) => {
// //     let customer = req.body;
// //     var sql = "INSERT INTO `user`(`name`, `userName`, `password`, `address`, `role`, `mobileNumber`) VALUES (?,?,?,?,?,?)"
// //     mysqlConnection.query(sql,[customer.name,customer.userName,customer.password,customer.address,customer.role,customer.mobileNumber],(err,rows,field)=>{
// //         if(!err){
// //             console.log(rows);
// //             res.send(200,rows);
    
// //         }  
// //         else{
// //             console.log(err)
// //         }
// //         })
// // }); 



// // Add a new customer
// app.post('/registerCustomer', (request, response) => {
//     console.log(request.body);
//     mysqlConnection.query('INSERT INTO user SET ?', request.body, (error, result) => {
//         if (error){
//             throw error;
//         } else{
//             let payload = {subject:request.body.userName}
//             let token = jwt.sign(payload,'secret key');
//             response.status(200).send({token});
//         }      
         
//     });
// });

// //// Update an existing user
// app.put('/user/:id', (request, response) => {
//     const id = request.params.id;
 
//     mysqlConnection.query('UPDATE user SET ? WHERE id = ?', [request.body, id], (error, result) => {
//         if (error) throw error;
 
//         response.send('User updated successfully.');
//     });
// });

// // Delete a user
// app.delete('/user/:name', (request, response) => {
//     const id = request.params.name;
 
//     mysqlConnection.query('DELETE FROM user WHERE name = ?', id, (error, result) => {
//         if (error) throw error;
 
//         response.send('User deleted.');
//     });
// });

// //  admin-login using jwt
// // app.post('/admin-login', (request, response) => {
    
// //     mysqlConnection.query('select * from user where role="Admin"', (error, rows) => {
// //         console.log(rows);
// //         // if (error){
// //         //     response.status(401).send('invalid username');
// //         // } else{
// //         //     if(result.userName==request.body.userName){
// //         //         // if(result.password==request.body.password){
// //         //         //     let payload = {subject:result.userName}
// //         //         //     let token = jwt.sign(payload,'secret key');
// //         //         //     response.status(200).send({token});
// //         //         // }
// //         //         // else{
// //         //         //     response.status(401).send('invalid password');
// //         //         // }
// //         //     }
            
// //         // }
// //         if (error) throw error;
 
// //         response.send(rows);      
         
// //     });
// // });

// // Display all users
// app.get('/users', (request, response) => {
//     mysqlConnection.query('SELECT * FROM transaction', (error, result) => {
//         if (error) throw error;
 
//         response.send(result);
//     });
// });
// //get all the admin-login
// app.post('/admin-login', (req, res) => {
//         var a = req.body;
//     console.log(a.role);
//     mysqlConnection.query('select * from user where role="Customer"',(err,rows,field)=>{
//         if(!err){
//            // console.log(req.body.userName)
            
//                // console.log(a)
//                 console.log("very good atul");
//                 res.send(200,rows);
         
            
    
//         }  
//         else{
//             console.log(err)
//         }
//         })
// }); 

// /////////////////////////////////////////////////
// app.post('/login', (req,res) => {
//     const postData = req.body ;
   

//     const user = {
//         "userName": postData.userName,
//         "password": postData.password
//     }
//     // do the database authentication here, with user name and password combination.
//     // const token = jwt.sign(user, config.secret, { expiresIn: config.tokenLife})
//     // const refreshToken = jwt.sign(user, config.refreshTokenSecret, { expiresIn: config.refreshTokenLife})
//     // const response = {
//     //     "status": "Logged in",
//     //     "token": token,
//     //     "refreshToken": refreshToken,
//     // }
//     // tokenList[refreshToken] = response
//     // res.status(200).json(response);
//     console.log(postData)
//     console.log(postData.password)

// })
