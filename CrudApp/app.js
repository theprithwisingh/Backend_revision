//ENABLE .ENV
require('dotenv').config();
const express = require('express');
const connectToDb = require('./config/db.js');

const app = express();
app.get('/',(req,res)=>{
    res.send('hello world!')
});
module.exports = app;
// export default app;