var express = require('express');
var pdModal = require('../model/personalDetails.modal');
var router = express.Router();

router.get("/",(req,res)=>{
    (async()=>{
        console.log("personalDetails request came");
    try{
        const document = await pdModal.getPersonalDetails();
        res.json(document);
    }
    catch(err)
   {
       res.send(err);
   }
    }
    )();
})

module.exports = router;