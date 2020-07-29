var express = require('express');
var ContactModel = require('../model/contact.model');
var router = express.Router();


router.put("/",(req,res)=>{
    console.log("contact request came");
    ContactModel.createContact(req.body).then((result)=>{
        res.status(201).send({id: result._id});
    });
});

module.exports = router;