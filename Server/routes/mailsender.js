
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");


var express = require('express');
var router = express.Router();

// Generate SMTP service account from ethereal.email
 

  

const sendMail = (callback) => {
  
  console.log('send mail')
  let testAccount ;
   nodemailer.createTestAccount((err, account) => {
    if (err) {
        console.error('Failed to create a testing account');
        console.error(err);
        return process.exit(1);}
    
    else{
     
      console.log('testAccount' + account);
      console.log('Credentials obtained, sending message...');
      const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        
        auth: {
          user: account.user,
          pass: account.pass
        },
        // sender address
        //from:`TomerTrojmanApp@nodemailer.com`,
        headers: {
          'X-Laziness-level': 1000 // just an example header, no need to use this
      },
        logger: true,
        debug: false // include SMTP traffic in the logs
      });
      const mailOptions = {     
        from:"sender@ethereal.email",
        to: "tomert@hotmail.com",
        subject: "Contact Request",
        html: "<h1>And here is the place for HTML</h1>"
      };
      
      transporter.sendMail(mailOptions, callback); 
    }
    });
    
  
  
    
   
  }

router.post("/",(req,res)=>{
    console.log("request came");
    //let user = req.body;
    //console.log(user)
    sendMail( (err, info)=>{
        if (err) {
            debugger;
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