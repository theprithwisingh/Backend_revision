/*onst http = require('http')
console.log(http);

const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        res.write('<h1>helllo world</h1>')
    }
    else if(req.url=='/about'){
        res.write('<h1>ABOUT page</h1>')
    }
    res.end();
})
server.listen(5003);
console.log('the http server is running on port 5002');
*/ 
const http = require('http')
// console.log(http)

const server =  http.createServer((req,res)=>{
  if (req.url=='/') {
    res.write('<h1>helllo world</h1>')
  }
  console.log('server error...')
})
server.listen(5006);
console.log('the http server is running on port 5006');