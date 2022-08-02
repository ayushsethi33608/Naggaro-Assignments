function sendmessage(){
    Email.send({
    SecureToken : 'baf36448-7180-486d-a1d4-ae9d6d9eab2c',
    To : "ayushsethi0630@gmail.com",
    From : "ayushsethi33608@gmail.com",
    Subject : `Query from Name:${document.getElementById('Name').value} & Email: ${document.getElementById('Email').value}`,
    Body : `${document.getElementById('Message').value}`
}).then(
  message => alert(message)
);
alert("sent");
}