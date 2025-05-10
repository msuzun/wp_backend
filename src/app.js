import express from "express";


//create a new express app
const app = express();

app.get("/",(req,res)=>{
    res.send("helloo from server");
});

export default app;