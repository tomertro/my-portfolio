const ContactModel = require('../model/contact.model');
var config = require( "../config/config" );
const nodemailer = require("nodemailer");


class mailSenderService{

    constructor(){}
    


    async handleMailrequest(req,res){
        try{
           var id = req.body.ContactID;
           const contact = await ContactModel.getContact(id);
           if(contact === undefined || !contact){
               res.status(500);
               return {response:res,error: 'No Contact found.'};
           }
            //passport.authenticate('google', { scope: ['profile','email'] },(req1,res1)=>{
          //   console.log(`req:${req1} response:${res1}`)
        //   })
           const result = await this.sendMail(contact,res);
           return result;
         
        }
        catch(err){
           console.log(`error on handleMailrequest.error:${err}`); 

        }
       }
    // Generate SMTP service account from ethereal.email
    async sendMail(contact,res){
        try{  
            const transporter = nodemailer.createTransport({
                //name:'localhost',
                host: 'smtp.gmail.com',
                //port:587,
                port:465,
                //secure:false,
                secure:true,
                //service: 'gmail',
                auth: {
                  type: 'OAuth2',
                  user: config.emailUser,
                  //todo get access Token
                  accessToken:''
              },
                //auth: {
                //  user:config.emailUser,
               //   pass:config.emailPass,
                
               // },
                
                headers: {
                  'X-Laziness-level': 1000 // just an example header, no need to use this
              },
                logger: true,
                debug: true // include SMTP traffic in the logs
              });

              transporter.set('oauth2_provision_cb', (user, renew, callback)=>{
                let accessToken = userTokens[user];
                if(!accessToken){
                    return callback(new Error('Unknown user'));
                }else{
                    return callback(null, accessToken);
                }
            });
            
            transporter.on('token', token => {
              console.log('A new access token was generated');
              console.log('User: %s', token.user);
              console.log('Access Token: %s', token.accessToken);
              console.log('Expires: %s', new Date(token.expires));
          });
            
              const mailOptions = {    
                from: 'tomertapps@gmail.com',
                 to: contact.email,
                 cc:'tomert@hotmail.com',
                 subject: 'Contact Request',
                 html: `<h1>Contact Request from ${contact.firstName} ${contact.lastName}</h1>`
               };
               
               const info = await transporter.sendMail(mailOptions); 
               console.log("Email has been sent");
               console.log(nodemailer.getTestMessageUrl(info));
               res.status(200);
               return {response:res,mailInfo:info}
             
        }
        catch(err){
            let errorObj ={ Message:err.message,Stack: err.stack,Origin:err};
            console.log(err);
            res.status(400);
            return {response:res,error:errorObj}
        }

    }
           
}

//singleton service
module.exports = new mailSenderService();