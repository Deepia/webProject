const express= require("express");
const path=require("path");
const hbs=require("hbs");
const app=express();
const port=process.env.PORT || 8000;
const templates_path=path.join(__dirname,"../src/templates/views")
const partial_path=path.join(__dirname,"../src/templates/partials")
//for setting hbs
app.set("view engine","hbs");
//For adding templates folder instead of views path
app.set("views",templates_path);

//For register partial path
hbs.registerPartials(partial_path);

//For using static path
const static_path=path.join(__dirname,"../public")
app.use(express.static(static_path));


//routing
app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/weather",(req,res)=>{
    res.render("weather");
});
app.get("*",(req,res)=>{
    res.render("404error",{msg:"oops! page not found"});
});
app.listen(port,()=>{
    console.log(`listening to the port at ${port} `);
})