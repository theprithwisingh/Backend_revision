const fs = require('fs');
fs.writeFile('index.txt','hello world again again',function(err){
    if(err){
        console.log('Getting error: ',err);
    }
    else{
        console.log('successfully manupulate data')
    }

    fs.readFile('index.txt',function(err ,fd){
        if(err){
            console.log('Error: ',err)
        }
        else{
            console.log('Data: ', fd.toString())
        }
    })
})