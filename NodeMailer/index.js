require('dotenv').config();

const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
 });

const mailOptions = {
    from: 'ayushsethi33608@gmail.com', // Sender address
    to: 'ayushsethi0630@gmail.com', // List of recipients
    subject: 'Node Mailer', // Subject line
    text: 'Hello People!, Welcome to Bacancy!', // Plain text body
};

transport.sendMail(mailOptions, function(err, info) {
   if (err) {
     console.log(err)
   } else {
     console.log(info);
   }
});