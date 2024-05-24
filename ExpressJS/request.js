const  http = require('http');

const options={
    hostname:'http://localhost:3022',
    path:'/',
    method:'GET'
}
const apiReq = http.request(options,(apiRes)=>{
    apiRes.on("data",(data)=>{
        console.log("data->>",data.toString());
    })
});

apiReq.on("error",()=>{
console.log("Error->",e);
});

apiReq.end();