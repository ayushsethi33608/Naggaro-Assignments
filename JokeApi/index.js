const express=require('express');
const app=express();
const mysql = require('mysql')
const request=require('request');
const url='https://v2.jokeapi.dev/joke/Programming?type=twopart&amount=10';
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hii");
})


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


// params implementation
app.get('/joke/:id',async (req,res)=>{
   var id=req.params.id;
    // console.log(req.params.id);
    var setup,delivery;
await db.query(`Select * from jokes where id='${id}'`,(err,row,field)=>{
    if(err) console.log(err);
    else{
        // console.log(row);
        console.log(row[0].setup);
     setup=row[0].setup;
     delivery=row[0].delivery;
        // console.log(row[0]['setup']);
        // console.log(row[0]['delivery']);
    }
    res.send(`<h2>${setup}</h2><h2>${delivery}</h2>`);
});

})

// To add jokes in db from api
app.get('/add',async(req,res)=>{
   await request(url,(err,response,body)=>{
        if(err) console.log(err);
        var data=JSON.parse(body);
        console.log(data);
        for(var i=0;i<=9;i++){
            var id=i+1;
            var setup=(data.jokes[i].setup).toString();
            setup=setup.replace("'", "''");
            var delivery=(data.jokes[i].delivery).toString();
            delivery=delivery.replace("'", "''");
            db.query(`INSERT INTO jokes(id,setup,delivery) values ('${id}','${setup}','${delivery}')`);
        }
        });
        res.send("Succesfully Inserted");
    });
    

app.listen(3000,()=>{
    console.log("Listening....");
})