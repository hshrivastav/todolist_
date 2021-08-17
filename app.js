const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");
const app=express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
var listtitle="";
var items=[];
var workitems=[];
var day="";
var item="";
app.get("/",function(req,res){
    day=date.getdate();
    res.render("list",{listtitle:day,newitemadd:items});
});
app.post("/", function(req, res) {

     item = req.body.newitem;
    if(req.body.list==="work list"){
      workitems.push(item);
      res.redirect("/work");
    }
    else{
      items.push(item);
      res.redirect("/")
    }


  });

app.listen(3000,function(){
  console.log("server started on port 3000");
})
app.get("/work",function(req,res){
    res.render("list",{listtitle:"work list",newitemadd:workitems});

});
app.get("/about",function(req,res){
    res.render("about");

});
app.post("/work",function(req,res){
  let item=req.body.newitem;
  workitems.push(item);
  res.redirect("/work");
});
//hello
