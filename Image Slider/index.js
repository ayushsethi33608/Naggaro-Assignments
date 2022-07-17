var current=1;
function nums(num){
if ((current+num)>4) current=1;
else if((current+num)<=0) current=4;
else{
    current=current+num;
}
document.getElementById('image').src=`Images/img${current}.jpg`
}