tipper("15");
function tipper(a)
{
    var bill=parseInt(a);
    console.log(bill+5);
}
const bigTipper=function(a){
    var bill=parseInt(a);
    console.log(bill+15);
};
bigTipper("10");
//CODE HOISTING 
//THIS IS VARIBLE BASED FUNCTION 
/*const bigTipper=function(a){
    var bill=parseInt(a);
    console.log(bill+15);
};
bigTipper("10"); */
//THIS IS ACTUAL FUNCTION 
/*
//WE CAN ALSO CALL THE FUNCTION BEFORE DECLARATION OF FUNCTION CODE IN ACTUAL FUNCTION 
//BUT WE CAN NOT USE similiare SYNTAX IN VARIABLE BSED FUNCTION 

  /*function bigTipper(a){
    var bill=parseInt(a);
    console.log(bill+15);
};
bigTipper("10"); */
/*
//IN THIS FOLLOWING CASE IF NAME IF VALUE OF VARIABLE IS AVAILABLE TO THE FUNCTION 
//ITSELF THEN IT WILL SIMPLY FECTCH THE VALUE FROM IT ,
//OTHERWISE IF NOT THEN IT WILL TRY TO FETCH VALUE OF THAT SIMILIAR VARIABLE FROM THE ABOVE IF IT IS AVAILABLE
var name="Hitesh";
console.log("Line number 3 ",name);
function sayName()
{
    var name="My R";
    console.log("Line number 7 ",name);
}
sayName();
*/