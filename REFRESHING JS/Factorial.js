const prompt = require("prompt-sync")();
function fac(num)
{
if(num==0){
        return 1;
    }
    else
    {
        return num*fac(num-1);
    }
}
var n=prompt("ENTER THE NUMBER TO FIND FAC ");
ans=fac(n);
console.log(ans);