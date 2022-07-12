
let popBtn = document.getElementById('fBtn');
popBtn.addEventListener('click', fetch);

function fetch() {
    
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.cricapi.com/v1/series?apikey=078c78a3-e8d7-404b-89b4-23f988df5da9&offset=0', true);


    xhr.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
             let list = document.getElementById('inner');
             str2= "";
             for (let i=0;i<obj['data'].length;i++)
             {
                str2 +=`<tr><td> ${obj['data'][i]['name']}</td> <td> ${obj['data'][i]['startDate']}</td> <td> ${obj['data'][i]['odi']}</td> <td> ${obj['data'][i]['test']}</td> <td> ${obj['data'][i]['t20']}</td></tr>'`; 
             }
             list.innerHTML = str2;
        }
        else{
            console.log("Some error occured")
        }
    }

    xhr.send();
    
}

