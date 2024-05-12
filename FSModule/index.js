
const fs  = require('fs');
// console.log("READ START");

//Asynchronous ways to read file
/*
fs.readFile('input.txt', function(err,data){
    if(err){
     console.log('Errorssss:', err);
     return err;
    }
    console.log('Data: ',data.toString());
    console.log('Read End')
    return data;
})
console.log("OTHER STUFF");
*/


//Synchronous ways to read file

console.log("First Read");
var data = fs.readFileSync('input.txt');
console.log('Data: ',data.toString())
console.log("Second Read");
