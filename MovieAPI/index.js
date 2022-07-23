
    async function submitbtn(){
        var input=document.getElementById('movie').value;

    
        if(input.trim()!='')
            fetch(`http://www.omdbapi.com/?apikey=f91d256c&t=${input}`).then(response=>
                response.json()).then(data=>{
                console.log(data);
                if(data.Response=='False'){
                 document.getElementById('title').innerHTML=`<b>N/A</b>`; 
                 document.getElementById('plot').innerHTML=`<b> Movie not found!</b>`;
                 document.getElementById('runtime').innerHTML=`<b>Runtime: N/A</b>`;
                 document.getElementById('genre').innerHTML=`<b>Genre: N/A</b>`;
                 document.getElementById('rating').innerHTML=`<b>Rating: N/A</b>`;    
                 document.getElementById('image').src='https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found-300x169.jpg';
                }
                else{
                document.getElementById('title').innerHTML=`${data.Title}`; 
                document.getElementById('plot').innerHTML=`${data.Plot}`;
                document.getElementById('runtime').innerHTML=`<b>Runtime:</b> ${data.Runtime}`;
                document.getElementById('genre').innerHTML=`<b>Genre:</b> ${data.Genre}`;
                document.getElementById('rating').innerHTML=`<b>Rating:</b> ${data.imdbRating}`;
        
                var poster=data.Poster;
                if(poster=='N/A'){
                    document.getElementById('image').src='https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found-300x169.jpg';
                }
                else{
                    document.getElementById('image').src=`${data.Poster}`;
                }
                document.getElementById('card').style.display='block';
            }
                }).catch(err=>{
                    console.log(err);  
    });
            else{
                alert("Please enter a name ");
            }       
    }