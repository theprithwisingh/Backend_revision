const express = require('express');
const app  = express();

const PORT = 3020;
const HOSTNAME = 'localhost';

app.get('/', (req,res)=>{
    res.send('Hello World');
})
app.get('/about/newPage', (req,res)=>{
    res.send('New Pages!');
})
app.get('/about', (req,res)=>{
    res.send('About Page!');
})

app.get('/contact', (req,res)=>{
    res.send('Contact Page!');
})

app.get('/pages', (req,res)=>{
    res.send('their are many pages');
})
app.listen(PORT, ()=>{
    console.log(`Server running at ${HOSTNAME}: ${PORT}`)
});