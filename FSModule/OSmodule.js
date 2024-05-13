const os  =require('os');
console.log('arch-> ',os.arch());
console.log('freemem-> ',os.freemem());
console.log('totalmem-> ',os.totalmem());
console.log('NI-> ',os.networkInterfaces());
console.log('tmpdir-> ',os.tmpdir());
console.log('Endianess-> ',os.endianness());
console.log('Hostname-> ',os.hostname());
console.log('os type-> ',os.type());
console.log('os platform-> ',os.platform());
console.log('os releases: ', os.release());

console.log('OS Module')