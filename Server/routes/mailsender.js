

const nodemailer = require("nodemailer");
var express = require('express');
var router = express.Router();
const mailSenderService =  require('../services/mailSender.service')



 router.post("/",async (req,res)=>{ 
    console.log("request came"); 
    const result = await mailSenderService.handleMailrequest(req,res); 
    if(result.response.statusCode !== 200){
      console.log(result.error);
      result.response.send(result.error);
    }
    else{
      result.response.send(result.mailInfo);
    } 

});



module.exports = router;