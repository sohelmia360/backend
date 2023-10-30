require("dotenv").config();

const express =  require("express");
const app = express();

const port = process.env.PORT;

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.get("/youtube",(req,res)=>{
    res.send("Coding Sohel")
})


app.listen(port, ()=>{
    console.log(`Server is running at port number ${port}`)
})