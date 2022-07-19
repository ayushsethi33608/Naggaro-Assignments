const http= require('http');
const request=require('request');
const api_key='1c6ec0e975ff4ac4ee443687dde3b7c3';
const url=`https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=${api_key}&units=metric`;


var server=http.createServer((req,res)=>{
request(url,(err,response,body)=>{
var data=JSON.parse(body);
console.log(data);
res.writeHead(200,{'content-type':'text/html'});
res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-12 col-md-4 col-sm-12 col-xs-12"> 
                   <div class="card p-4">    
                    
                       <div class="d-flex">
                           <h6 class="flex-grow-1">${data.name}</h6>
                       </div>
                        
                       <div class="d-flex flex-column temp mt-5 mb-3">
                           <h1 class="mb-0 font-weight-bold" id="heading"> ${data.main.temp} </h1>
                           <span class="small grey">${data.weather[0].main}</span>
                       </div>
                       
                       <div class="d-flex">
                           <div class="temp-details flex-grow-1">
                                <p class="my-1">
                                    <i class="fa-solid fa-wind"></i>
                                   <span> ${data.wind.speed}  </span>
                                </p>

                                <p class="my-1"> 
                                   <i class="fa-solid fa-droplet mr-2" aria-hidden="true"></i>
                                   <span> ${data.main.humidity} </span> 
                                </p>
                           </div>     
                       </div>
                    </div>
            </div>
        </div>


    </div>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</body>
</html>`);
res.end();
})
});

server.listen(8000,'localhost',()=>{
    console.log("Listening...");
});
