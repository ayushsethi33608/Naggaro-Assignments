
let popBtn = document.getElementById('fBtn');
popBtn.addEventListener('click', fetch);

function fetch() {    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.cricapi.com/v1/currentMatches?apikey=078c78a3-e8d7-404b-89b4-23f988df5da9&offset=0', true);


    xhr.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
             let list = document.getElementById('grid');
              str2= "";
              for (let i=0;i<obj['data'].length;i++)
              {
                 str2 +=` <div class="main">
                 <p class="head">${obj['data'][i]['name']}</p><br>
                 <table class="table">
                     <tr>
                         <td>
                            <img class="flag" src="${obj['data'][i]['teamInfo'][0]['img']}" alt="">&emsp;
                                 <span>${obj['data'][i]['teamInfo'][0]['shortname']}</span><br><br>
                             <p class="score">${obj['data'][i]['score'][0]['r']} / ${obj['data'][i]['score'][0]['w']}</p>
                             <p class="overs">${obj['data'][i]['score'][0]['o']}</p>
                        </td>
                        <td class="right1">
                            <span>${obj['data'][i]['teamInfo'][1]['shortname']}</span>&emsp;<img class="flag" src="${obj['data'][i]['teamInfo'][1]['img']}" alt=""><br><br>
                            <p class="score">${obj['data'][i]['score'][1]['r']} / ${obj['data'][i]['score'][1]['w']}</p>
                            <p class="overs">${obj['data'][i]['score'][1]['o']}</p>
                        </td>
                    </tr>
                </table>
                
                     <p class="res">${obj['data'][i]['status']}</p>
                     </div>'`; 
              }
              list.innerHTML = str2;
        }
        else{
            console.log("Some error occured")
        }
    }

    xhr.send();
    
}

