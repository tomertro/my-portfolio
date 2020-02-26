

const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
var os = require('os');
var config = require( "../src/config" );

var express = require('express');
var router = express.Router();

// Generate SMTP service account from ethereal.email

const sendMail = (contact,callback) => {
  console.log('send mail');
  const transporter = nodemailer.createTransport({
    name:'localhost',
    host: "smtp.ethereal.email",
    port:587,
    secure:false,
    service: "gmail",
    auth: {
      user:config.emailUser,
      pass:config.emailPass,
    
    },
    
    headers: {
      'X-Laziness-level': 1000 // just an example header, no need to use this
  },
    logger: true,
    debug: false // include SMTP traffic in the logs
  });
  const mailOptions = {    
   from: '"tomertapps"tomertapps@gmail.com',
    to: "tomert@hotmail.com",
    subject: "Contact Request",
    html: `<h1>Contact Request from ${contact.firstName} ${contact.lastName}</h1>`
  };
  
  transporter.sendMail(mailOptions, callback); 
}



router.post("/",(req,res)=>{
  debugger;
    console.log("request came");
    var contact = {firstName:req.body.firstName, lastName:req.body.lastName,};
    sendMail( contact,(err, info)=>{
        if (err) {
           
            console.log(err);
            res.status(400);
            res.send({ error: "Failed to send email" });
          }
          else{
            console.log("Email has been sent");
            console.log(nodemailer.getTestMessageUrl(info));
            res.send(info);
          }
    });
});



module.exports = router;