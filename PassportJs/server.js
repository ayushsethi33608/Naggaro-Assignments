 const express=require('express');
 const app=express();
const {connectMongoose,User}=require("./database.js");
const ejs=require("ejs");
const passport=require('passport');
const expressSession=require('express-session');
const { initializingPassport } = require('./passportConfig.js');

connectMongoose();

initializingPassport(passport);

app.use(expressSession({secret:"secret",resave: false, saveUninitialized: false}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");

app.get("/",(req,res)=>{
res.render("index");
 })

 app.get('/register',(req,res)=>{
    res.render("register");
 })

 app.get('/login',(req,res)=>{
    res.render("login");
 })

 app.post('/login',passport.authenticate("local",{failureMessage:"Not Valid"}),(req,res)=>{
res.send("Log in successful");
 })

 app.post("/register", async (req,res)=>{
const user= await User.findOne({username:req.body.username});

if(user) return res.status(400).send("User already exits");

const newUser=await User.create(req.body);
res.status(201).send(newUser);
 })

 app.listen(3000,()=>{
    console.log('listening on http://localhost:3000/'); 
 })