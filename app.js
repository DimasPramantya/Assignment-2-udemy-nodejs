const express = require("express");

const { handleUsers, handleLanding, users, handleCreateUser } = require("./handleRoute");

const app = express();

app.use('/',(req,res,next)=>{
    console.log("Inside first middleware");
    next();
})

app.use('/users',handleUsers)

app.use('/create-user', handleCreateUser)

app.use('/',handleLanding)

app.listen(5000,()=>{
    console.log("Server is listening on PORT 5000");
})