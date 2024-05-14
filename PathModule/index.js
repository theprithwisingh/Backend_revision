const path  =require("path");
console.log(path.sep);// w\

console.log(process.env.PATH);

console.log(path.delimiter);// ;

const filePath1 = '.\public_html\home\index.html';

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

console.log('IsAbsolute ->',path.isAbsolute(currentFilePath));//true
console.log('IsAbsolute ->',path.isAbsolute('\index.js'));//false->bocz it's relative
console.log('IsAbsolute ->',path.isAbsolute('.\index.js'));//false->bocz it's relative
console.log('IsAbsolute ->',path.isAbsolute('..\index.js'));//flase->bocz it's relative

let pathToDir = path.join('\home','js','dist','index.js')
console.log('pathToDir >', pathToDir);

console.log('parse >', path.parse(currentFilePath));/*
parse > {
    root: 'c:\\',
    dir: 'c:\\Users\\dl\\Desktop\\Backend\\myproject',
    base: 'index.js',
    ext: '.js',
    name: 'index'
     }
*/  

const fromPath = '/home/user/config';
const toPath = '/home/user/js';
console.log(path.relative(fromPath, toPath));//    ..\js

console.log('resolve >', path.resolve());
//resolve > C:\Users\dl\Desktop\Backend


const originalPath = '/home/user/.././documents/file.txt';
const normalizedPath = path.normalize(originalPath);
console.log("normalizedPath >", normalizedPath);
//normalizedPath > \home\documents\file.txt