const express=require("express");
const app=express();

require("dotenv").config();
const PORT=process.env.PORT||4000;
app.use(express.json());

const blog=require("./route/blog");
app.use("/api/v1",blog)



app.get("/",(req,res)=>{
    res.send('<h1>This is home</h1>');

})

const connectWithDb=require("./config/database");
connectWithDb();

app.listen(PORT,()=>{
    console.log('App i  started Port');
})