const prompt = require("prompt-sync")();
var s=prompt("ENTER THE STRING ");
var size=s.length;
var count;
var last;
for(var i=0;i<size;i++)
{
if(s[i]==" ")
{   last+=count;
    count=0;
}
else
{
    count++;
}
}
var ans=Math.max(count,last)
console.log(ans);