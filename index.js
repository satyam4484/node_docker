const express = require("express");


const app = express();

app.get('/',async(req,res)=>{
    res.send({message:"hello welcome to docker"})
})

app.get('/user',async(req,res)=>{
    res.send({message:"hello welcome nodejs project satyam singh"})
})

app.listen(3000, () => {
    console.log("Server started");
});

module.exports = app;