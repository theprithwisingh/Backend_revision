const express  = require('express');
const app = express();
const authRouter = require('./router/autoRoute');

const databaseconnect = require('./config/databaseConfig')
databaseconnect();

app.use(express.json());
app.use('/api/auth',authRouter)
app.use('/',(req,res)=>{
    res.status(200).json({data:'JWTauth server updated'})
});
module.exports = app;