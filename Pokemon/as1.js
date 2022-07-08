const element = document.getElementById("myBtn");
element.addEventListener("click", myFunction);

function myFunction() { 
  k=window.confirm("You really want to visit the gallery");
  if(k){
    location.href="gallery.html";
  }    
}