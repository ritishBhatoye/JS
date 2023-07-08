// function sayHello(){
//     return "HELLO";
// }
// console.log(sayHello())
// //SUM
// function add(a,b){
//     return a+b;
// }
// // console.log(add(4,5));
// const add=(a,b)=>{
// return a+b;
// } 
// console.log(add(5,5));

const prompt = require("prompt-sync")();
function testcases(name,user){
    switch (user) {
        case 'admin':
          console.log(`${name} is admin with all access`);    
          break;
        case 'subadmin':
            console.log(`${name} is sub-admin with access to create/delete courses`);
            break;
        case 'testprep':
            console.log(` ${name} is with access to create/delete test`);
            break;
        case  'user':
            console.log(`${name} consume all content`);
            break;
        default:
            console.log(`${name} is trial user`);
            break; 
    }
}
var name=prompt("ENTER YOUR NAME ");
var user=prompt();

console.log(testcases(name,user));