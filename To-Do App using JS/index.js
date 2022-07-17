function add(){
    var a=document.getElementById('input').value;
    var n=document.createElement("li");
    n.className="list-group-item list-group-item-primary";
   var ip= document.createTextNode(a);
    if(a==''){
        alert('Please enter something first');
    }
    else{
        n.appendChild(ip);
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);  
        n.appendChild(span);
        document.getElementById("ul").appendChild(n);
    }
    document.getElementById('input').value="";          

    var close = document.getElementsByClassName("close");

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
      }
    }
}



