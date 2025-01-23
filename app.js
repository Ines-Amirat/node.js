const value = 20;

if(value < 20){
    console.log("hello world");
}
else{
    console.log("next Level");
}

//Global
console.log(__dirname);
console.log(__filename);


// setInterval(() => {
//     console.log("hello world");
// },1000);

const names = require('./module');
const func =  require('./function');
const objs =  require('./object');

require('./addNumber');


console.log(names);
func("ines");
console.log(objs);

//import os module (one of the built-in node js )
const os = require('os')
const user = os.userInfo()
console.log(user)

const curruntOs ={
    name: os.type(),
    release: os.release(),
    memory: os.totalmem(),
    freeSp: os.freemem(),
}


console.log(curruntOs)
