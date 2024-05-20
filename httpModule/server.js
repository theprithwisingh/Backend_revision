/*
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(' Hello, World! \n my self Prithwi singh \n Im an Engineer');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/
const http =  require('http');
const server = http.createServer((req,res)=>{
  if(req.url=='/'){
    res.write('<h1>hello world prithwi singh</h1>');
  }
  // res.end();
})
server.listen(5006);
console.log('the http server is running on port 5006');