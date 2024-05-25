const http  = require('http');

const PORT = 3030;
const HOSTNAME = 'localhost';

const server = http.createServer((req,res)=>{
    if (req.url=='/') {
    res.statusCode = 200;
    res.setHeader = ('Content-Type','text/plain');
    res.end("Welcome on My Portfolio");
    }
    else if (req.url=='/about') {
        res.statusCode = 200;
        res.setHeader('content-Type','text/plain');
        res.end('Welcome to about page');
    }
    else if (req.url=='/contact') {
        res.statusCode = 200;
        res.setHeader('content-Type','text/plain');
        res.end('Welcome to contact page');
    }
    else if (req.url=='/product') {
        res.statusCode = 200;
        res.setHeader('content-Type','application/json');
        res.end({productName:'Product-1'});
    }
    else{
        res.statusCode = 500;
        res.setHeader('content-Type','text/plain');
        res.end('Error');
    }

    // res.statusCode = 500;
    // res.setHeader('Content-Type','text/plain');
    // // res.end('Node Server created by Prithwi singh C!');
    // res.end(JSON.stringify({error:"Server Error"}));

});

server.listen(PORT,()=>{
    console.log(`server running at ${HOSTNAME}:${PORT}`);
})