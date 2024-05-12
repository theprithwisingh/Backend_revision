const path  =require("path");
//console.log(path.sep);// w\

//console.log(process.env.PATH);

//console.log(path.delimiter);// ;

// const filePath1 = '.\public_html\home\index.html'
const currentFilePath = __filename;
console.log(currentFilePath);
console.log(__dirname);

let basename = path.basename(currentFilePath)
console.log('basename >' ,basename);//index.js

//only file name without extenstion
let basenameWithoutExt = path.basename(currentFilePath, '.js')
console.log('basenameWithoutExt >' ,basenameWithoutExt);//index

let dirname = path.dirname(currentFilePath);
console.log('dirname >', dirname);//      c:\Users\dl\Desktop\Backend\myproject


console.log('ext >', path.extname(currentFilePath));

let pathToFile = path.format({
    dir:'\c;\\public_html\home',//example directory
    base:'index.js' //basefile
})

console.log('pathToFile >', pathToFile)

console.log('IsAbsolute ->',path.isAbsolute(currentFilePath));
console.log('IsAbsolute ->',path.isAbsolute('\index.js'));//bocz it's relative
console.log('IsAbsolute ->',path.isAbsolute('.\index.js'));//bocz it's relative
console.log('IsAbsolute ->',path.isAbsolute('..\index.js'));//bocz it's relative

