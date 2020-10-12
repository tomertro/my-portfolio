const { throwError } = require('rxjs');

//https://www.toptal.com/nodejs/secure-rest-api-in-nodejs
const mongoose = require('../services/mongoose.service').mongoose;
const Schema = mongoose.Schema; 

const contactSchema = new Schema({
    firstName :String,
    lastName :String,
    eamil :String,
    phone :String,
    companyName:String,
    jobTitle:String,
    reqeustInfo:String
});
contactSchema.set('toJSON', {
    virtuals: true
});

// attach the schema to the contact model.
//After that, we can use this model to implement all the CRUD operations that we want within our endpoints.
const Contact = mongoose.model('Contacts', contactSchema);

exports.createContact = (contactData) => {
    const contact = new Contact(contactData);
    return contact.save();
};

//exports.getContact = (id) =>{await Model.findById(id)};
 exports.getContact  = (id)=>{ Contact.findById(id, function (err, contact) {
    if(err)
        throwError(err) 
    return contact;
})}; 

/*exports.getContact = (id) => {
    return Contact.findById(id)
        .then((result) => {
            
           
            return result;
        });
};*/