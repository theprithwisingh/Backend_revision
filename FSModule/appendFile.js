const fs  = require('fs');
fs.appendFile('index.txt','----Im Prithwi singh',function(err){
 if(err){
    console.log('Error: ',err)
 }
 console.log('apopend file successfully')
})