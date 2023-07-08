var name="Ritish";
console.log("Line number 2 ",name);

function sayName(){
    //var name="My R";
    console.log("Line number 7 ",name);
    sayNameTwo();
    function sayNameTwo()
    {
        console.log("Line number 10 ",name);
    }
}
sayName();