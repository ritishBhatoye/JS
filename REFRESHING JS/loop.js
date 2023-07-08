// var car=["Fortuner","Scorpio","Safari","Indego","Etios","Marazzo"];
// car.forEach((s)=>(console.log(s)));
const symbols={
    yt:"YouTube",
    ig:"Instagram",
    fb:"Facebook",
    lco:"LearnCodeOnline",
    R:"Ritish"
}
for(const n in symbols){
    console.log(`${n} : ${symbols[n]}`);
}