const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("Hii");
})

const mysql = require('mysql')


const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"admin",
    database:"test",
})

db.connect((err)=>{
    if(err) throw err;
    console.log("Connection established");
})

db.query(`INSERT INTO new_table(id,name) values (1,'Ayush')`)

app.listen(3000,()=>{
    console.log("Listening....");
})