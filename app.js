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

