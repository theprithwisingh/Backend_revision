const express = require('express')
const app = express()
//console.log(app);
const PORT = 3020;
const HOSTNAME = 'localhost';

app.get('/',(req,res)=>{
    res.send('Hello World , Im Prithwi')
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}:${HOSTNAME}`)
});
 
// const express = require('express')
// const newApp  = express.raw();
// console.log('result->',newApp);

