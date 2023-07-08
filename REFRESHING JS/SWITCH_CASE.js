const prompt = require("prompt-sync")();
console.log("SWITCH CASE");
var user=prompt();

switch(user){
    case 'admin':
        console.log("GET FULL ACCESS");
        break;
    case 'subadmin':
        console.log("GET ACCESS TO CREATE/DELETE COURSES ");
          break;
    case 'testprep':
        console.log("GET ACCESS TO CREATE/DELETE TESTS "); 
        break;    
    case 'user':
       console.log("GET ACCESS TO CONSUME CONTENT ");
       break;   
    default:
        console.log("Trail USER")
        break;   
}