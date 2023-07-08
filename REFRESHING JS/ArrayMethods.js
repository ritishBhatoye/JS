//1.fill() method
//This method will fill the array position with entered value in fill(4),also fill("h",,2,5) this
//indicates that it will 2 position of array to the 5 position of an array
var testArray=[2,4,6,3,1,5,9,8];
console.log(testArray.fill(null));
//2.filter() method this expected to pass a callback
const myNum=[23,24,25,55,66,87,98];
const result=myNum.filter((num)=>num!=55);
//NOW this above code in the line number 7 depicts that the array will not contain 55 value

console.log(result);