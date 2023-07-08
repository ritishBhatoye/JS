var fullName="Ritish Bhatoye";

var courseName="React JS BOOTCAMP";

var isLoggedIn=true;
var pay;
var loggedCount=34;

//pay="Credit Card";
//console.log(pay);
//console.log(loggedCount);
//HOW TO NAME VARIABLES
//var ui="PAYTM";
//ui="ODAT";
//console.log(ui);

var person={
    fullName:"Ritish Bhatoye",
    email:"ritishrahul87@gmail.com",
    password:"Kuldeep08",
    confirmedPassword:"Kuldeep08"
}
/*console.log("NAME : ",person.fullName);
console.log("EMAIL : ",person.email);
console.log("PASSWORD : ",person.password);
console.log("EMAIL : ",person.confirmedPassword);
console.log("CONFIRMED PASSWORD : ",person.confirmedPassword);
*/

//THIS FOLLOWING OUTPUT IS CALLED INTERPOLATION in JS
console.log(`
NAME:${person.fullName}
EMAIL:${person.email}
PASSWORD:${person.password}
CONFIRMED PASSWORD:${person.confirmedPassword}
`);