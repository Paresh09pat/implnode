//--------- express setup
// Q.1 : How do you create a simple Express.js application?

const express = require('express')

const server=express();

server.get("/home", (req, res) =>{
    res.send("Hello!");
})

server.listen(3000, () =>{
    console.log("server is running at port:8080");
})


//----------- Types of module exports
// Q.2 : Implementation of all types of exports in backend applications.

function defau(req,res){
    res.send("default exports")
}
function named(req,res) {
    res.send('named exports')
}
module.exports = default;//default export
module.exports = {named};//named export


//--------- cors
// Q.3 : Implement CORS.

var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())
 
app.get('/products', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
 
app.listen(3000, function () {
  console.log('CORS-enabled web server listening the port')
})


// -----------middleware
// Q.4 : Create a middleware which will be applicable to all the routes.

const middleware1 = (req,res,next) => {
  console.log("My middleware1");
  next();
}

const middleware2 = (req,res,next) => {
  console.log("My middleware2");
  next();
}

app.use(middleware1)//middleware for all application

app.get('/about',(req,res) => {
  res.send("Paresh Patil")
})

app.get('/contact',middleware2,(req,res) => {
  res.send("Harshal")
})


app.listen('3000',() => {
  console.log("Server is running on Port number 3000...");
})


