$(document).ready(function(){

$('#addbtn').click(function(){
var input=$('#input').val();
$('ul').append('<li class="list-group-item list-group-item-primary">' + input+ '<i class="fas fa-trash"> </i> </li>');
$('#input').val('');
});

$('ul').on('click','.fa-trash',function(){
$(this).parent('li').fadeOut(200);
});

});




