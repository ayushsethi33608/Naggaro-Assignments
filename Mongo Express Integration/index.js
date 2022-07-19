const express= require('express');
const app=express();

const { MongoClient } = require('mongodb');
// // Connection url
const url = 'mongodb://localhost:27017/';
// // Database Name
 const dbName = 'Sample';
// // Connect using MongoClient
 MongoClient.connect(url, function(err, client) {
     if(err) throw err;
   // Select the database by name
   console.log("Connected...");
   const mydb = client.db(dbName);
   mydb.collection('test').find('{}').toArray((err,res)=>{
    if(err) console.log('error occured');
    console.log(res);
   })
 });

app.listen(8000,()=>{
console.log("Listening.........");
})