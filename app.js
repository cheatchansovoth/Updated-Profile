const express= require("express");
const app=express();
const bodyParser=require("body-parser");

app.use(express.static(__dirname+"/public"));
app.get("/",function(req,res)
{
  res.sendFile(__dirname+"/index.html");
})
app.get("/about.html",function(req,res)
{
  res.sendFile(__dirname+"/error.html");
})
app.get("/skills.html",function(req,res)
{
  res.sendFile(__dirname+"/error.html");
})
app.get("/education.html",function(req,res)
{
  res.sendFile(__dirname+"/error.html");
})
app.get("/working.html",function(req,res)
{
  res.sendFile(__dirname+"/error.html");
})
app.get("/experience.html",function(req,res)
{
  res.sendFile(__dirname+"/error.html");
})
app.get("/contact.html",function(req,res)
{
  res.sendFile(__dirname+"/error.html");
})
app.get("/error.html",function(req,res)
{
  res.sendFile(__dirname+"/error.html");
})
app.listen(3000,function(req,res)
{
  console.log("server is running")
});
