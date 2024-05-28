const mongoose = require('mongoose');
const connectToDb = async ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then((conn)=>{
      console.log(`connnected to DB: ${conn.connection.host}`)
    })
    .catch((err)=>{
        console.log(err.massage);
        process.exit(1)
    })
}
module.exports = connectToDb;