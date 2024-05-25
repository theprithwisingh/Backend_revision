const express = require('express');
const app  = express();

const PORT = 3000;
const HOSTNAME = 'localhost';

app.get('/', (req,res)=>{
    res.send('Hello World');
})

app.listen(PORT, ()=>{
    console.log(`Server running at ${HOSTNAME}: ${PORT}`)
});