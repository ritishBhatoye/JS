var arr=[4,2,3,1,8];
const size=arr.length;
for(var i=1;i<size;i++)
{
    arr[i]+=arr[i-1];
}
for(var i=0;i<size;i++)
{
    console.log(arr[i]);
}