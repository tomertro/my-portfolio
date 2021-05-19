

//https://www.toptal.com/nodejs/secure-rest-api-in-nodejs
const mongoose = require('../services/mongoose.service').mongoose;
const Schema = mongoose.Schema; 
const defaultData = require("../assets/PersonalDetails.json");

const personalDetailsSchema = new Schema({
    Name:String,
    Title:String,
    Image:String, 
    About:String      
},{timestamps:true}
);
personalDetailsSchema.set('toJSON', {
    virtuals: true
});
personalDetailsSchema.index({updatedAt:-1},{Name:'personalDetailsIndex'})


const personalDetails = mongoose.model('personaldetails', personalDetailsSchema);
//export.getLatestPersonalDetails = ()=>{personalDetails.find};
/*exports.initpersonalDetails = ()=>{
    const res = personalDetails.estimatedDocumentCount();
    if(res.err )
        throwError(`error on initpersonalDetails. Exception ${res.err}`);
    return res.count;
}*/
async function isInitpersonalDetails()
{
    try{
        const res = await personalDetails.estimatedDocumentCount();
        return res > 0;
    }
    catch (err) {
        console.error(`error on initpersonalDetails. Exception ${err}`);
      }
          
}

exports.initpersonalDetails = ()=> 
{ 
    try{
        const pd = new personalDetails(defaultData);
        return pd.save()
    }
    catch (ex){
        throw ex;
    }
};

async function getPersonalDetails()
{
    try{
       const pd = await personalDetails.findOne({});
       return pd;
    }
    catch (ex){
        throw ex;
    }
}

exports.isInitpersonalDetails = isInitpersonalDetails;
exports.getPersonalDetails = getPersonalDetails;