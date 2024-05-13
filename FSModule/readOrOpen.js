const fs  = require('fs');
const buf = new Buffer(1024);

fs.open('input.txt','r+',function(err, fd){
    if(err){
        console.log('Error in opening file: ', err);
    }
    console.log('File open successfully')

    fs.read(fd, buf, 0, buf.length, 0, function(er,byteData){
      if(er){
        console.log("Error in opening file: ", err);
      }
      else{
        console.log('Data: ',buf.slice(0,byteData).toString())
        console.log('Data: ',buf.slice(0,byteData).toString())
        console.log('buffer Data: ',buf)
      }
    })
})