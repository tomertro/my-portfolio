

const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
var os = require('os');
var config = require( "../src/config" );
const url = require('url');
var express = require('express');
var router = express.Router();
var ContactModel = require('../model/contact.model');

// Generate SMTP service account from ethereal.email

const sendMail = (contact,callback) => {
  try {
  const transporter = nodemailer.createTransport({
    //name:'localhost',
    host: 'smtp.gmail.com',
    port:587,
    secure:false,
    service: 'gmail',
    auth: {
      user:config.emailUser,
      pass:config.emailPass,
    
    },
    
    headers: {
      'X-Laziness-level': 1000 // just an example header, no need to use this
  },
    logger: true,
    debug: true // include SMTP traffic in the logs
  });
  const mailOptions = {    
   from: 'tomertapps@gmail.com',
    to: 'tomert@hotmail.com',
    subject: 'Contact Request',
    html: `<h1>Contact Request from ${contact.firstName} ${contact.lastName}</h1>`
  };
  
  transporter.sendMail(mailOptions, callback); 

  } catch (error) {
    throw new Error('Send Email Failure');
  }
}



router.post("/",(req,res)=>{
  debugger;
    console.log("request came");  
    var id = req.body.ContactID;
    try {
      ContactModel.getContact(id).then((res1)=>{
        const contact = res1;
        if(contact === undefined || !contact){
          res.status(500).send("No Contact found.");
          return;
        }
        sendMail( contact,(err ,info)=>{
            if (err) {
                let errorObj ={ Message:err.message,Stack: err.stack,Origin:err};
                console.log(err);
                res.status(400);
                res.send(errorObj);
              }
              else{
                console.log("Email has been sent");
                console.log(nodemailer.getTestMessageUrl(info));
                res.status(200).send(info);
               // res.send(info);
              }
        });
    });
      
    } catch (error) {
      let errorObj ={ Message:error.message,Stack: error.stack,Origin:error};
      res.status(500).send(errorObj);
    }
 

});



module.exports = router;