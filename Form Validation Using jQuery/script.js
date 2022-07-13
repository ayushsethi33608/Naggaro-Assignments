$(document).ready(function(){
$('#usernamevalidation').hide();
$('#passwordvalidation').hide();
$('#confirmpasswordvalidation').hide();

var Error=true;
var email_error=true;
var password_error=true;
var confirmpassword=true;

$('#username').keyup(function(){
    username_validation();
});

function username_validation(){
    var username_val=$('#username').val();
if(username_val.length==''){
    $('#usernamevalidation').show();
    $('#usernamevalidation').html('Username cannot be empty');
    $('#usernamevalidation').css('color','red');
    Error=false;
    return false;
}
else{
    $('#usernamevalidation').hide();
}

if(username_val.length<3 || username_val.length>10){
    $('#usernamevalidation').show();
    $('#usernamevalidation').html('Invalid Username');
    $('#usernamevalidation').css('color','red');
    Error=false;
    return false;
}
else{
    $('#usernamevalidation').hide();
}
}

$('#email').keyup(function(){
email_validation();
});

var emailregex = new RegExp(/^([\-\.0-9a-zA-Z]+)@([\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/);

function email_validation(){
    var email= $('#email').val();
    if(email.length==""){
        $('#emailvalidation').show();
        $('#emailvalidation').html('Email cannot be empty');
        $('#emailvalidation').css('color','red');
        email_error=false;
        return false;
    }
    else{
        $('#emailvalidation').hide();
    }

    if(emailregex.test(email)){
        $('#emailvalidation').hide();     
    }
    else{
        $('#emailvalidation').show();
        $('#emailvalidation').html('Enter a valid email id');
        $('#emailvalidation').css('color','red');
        email_error=false;
        return false;
    }
}

$('#password').keyup(function(){
password_validation();
});

var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
function password_validation(){
    var password_val=$('#password').val();
    if(password_val.length==""){
        $('#passwordvalidation').show();
        $('#passwordvalidation').html('Password cannot be empty');
        $('#passwordvalidation').css('color','red');
        password_error=false;
        return false;
    }
    else{
        $('#passwordvalidation').hide();
    }

    if(strongRegex.test(password_val)){
        $('#passwordvalidation').hide();
    }
    else{
        $('#passwordvalidation').show();
        $('#passwordvalidation').html('Password must be atleast 8 characters long and must have one number, one uppercase, lowercase and special character.');
        $('#passwordvalidation').css('color','red');
        password_error=false;
        return false;
          }
    }

    $('#confirmpassword').keyup(function(){
confirm_password();
    });

    function confirm_password(){
        var confirm_password_val=$('#confirmpassword').val();
        var password_val=$('#password').val();
        if(password_val!=confirm_password_val){
            $('#confirmpasswordvalidation').show();
        $('#confirmpasswordvalidation').html('Password didnt match');
        $('#confirmpasswordvalidation').css('color','red');
        confirmpassword=false;
        return false;
        }

        else{
            $('#confirmpasswordvalidation').hide();    
        }
    }

    $('#submitvalidation').click(function(){
        username_validation();
        password_validation();
        confirm_password();

        if(Error==true && password_error==true && confirmpassword==true && email_error==true){
            return true;
        }
        else {
            return false;
        }
    });
});