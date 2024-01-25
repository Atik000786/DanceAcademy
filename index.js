const express=require("express");
const path=require("path");
const fs=require("fs");
const app=express();
const hostname="localhost";
const port=8000;
app.use(express.urlencoded());
app.use("/static",express.static("static"));
app.set("view engine","pug");
app.set("views",path.join(__dirname,"views"));
app.get("/",(req,res)=>{
   const params={};
   res.status(200).render("index.pug",params);
});

app.post("/contact",(req,res)=>{
    name=req.body.name;
    age=req.body.age;
    gender=req.body.gender;
    Address=req.body.Address;
    Email=req.body.Email;
    concern=req.body.concern;
    let output=` client name:${name},age:${age},gender:${gender},Address:${Address},Email:${Email},concern:${concern}`;
    fs.writeFileSync("output.txt",output);
    const params={message:"your form is successfully submited"};
    res.status(400).render("index.pug",params);
});
app.get("/contact",(req,res)=>{
    const params={};
    res.status(200).render("Contact.pug",params);
 })
app.get("/services",(req,res)=>{
    const params={};
    res.status(600).render("Services",params);
});
app.get("/About",(req,res)=>{
const params={};
res.status(600).render("About.pug",params);
});
app.listen(port,hostname,()=>{
    console.log(`this page is running at http://${hostname}:${port}`);
});