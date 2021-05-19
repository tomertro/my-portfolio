const mongoose = require('mongoose');

let count = 0;

const options = {
    autoIndex: false, // Don't build indexes
    //reconnectTries: 30, // Retry up to 30 times
    //reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    //geting rid off the depreciation errors
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    
};
async function connectWithRetry (){
    try{
        console.log('MongoDB connection with retry');
        let connection = await mongoose.connect(process.env.MONGODB_URL, options);        
        console.log('MongoDB is connected');
        return connection;
    }
    catch(err){
        console.log('MongoDB connection unsuccessful, retry after 5 seconds. ', ++count);
        console.log('error: ', err);
        setTimeout(connectWithRetry, 5000);
    }
}



(async()=>{
   let conn = await connectWithRetry();
   if(conn){
    const ps = require('../model/personalDetails.modal');
    const isInit= await ps.isInitpersonalDetails();
    if(!isInit){
     ps.initpersonalDetails().then((doc)=>{
         if(doc && doc._id){
            console.log(`Save default personal details successful.`)
         }
        
     }).catch((err)=>{
        console.log(`error on init personal details.error ${err}`);
     })
    }
   }
   
}
)//definition of method
() ; //invoke the method

exports.mongoose = mongoose;
