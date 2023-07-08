function tipper(a)
{
    var bill=parseInt(a);
    console.log(bill+5);
}
tipper("5");
//without parse int
//parse int:-it is used to convert datatype to which it is actially belong
function tipper(a)
{
    var bill=a;
    console.log(bill+5);
}
tipper(5);
