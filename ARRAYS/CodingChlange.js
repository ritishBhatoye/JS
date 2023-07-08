const calAvg=(a,b,c)=>{
return (a+b+c)/3;
}
const t1=[];
console.log("ENTER THE SCORES FOR TEAM 1 : ");
for(var i=1;i<=3;i++){
    t1+=prompt("ENTER THE "+i+"SCORE FOR TEAM 1");
}
var t1Avg=calAvg(t1[1],t1[2],t1[3]);
const t2=[];
for(var i=1;i<=3;i++){
    t2+=prompt("ENTER THE "+i+" SCORE FOR TEAM 2");
}
var t2Avg=calAvg(t2[1],t2[2],t2[3]);
const chekWinner=()=>{
    if(t1Avg>t2Avg){
        console.log("TEAM 1 IS WINNER ");
    }
    else{
       console.log("TEAM 2 IS WIINER ");
    }
}
console.log(chekWinner());