/*function sort(a,b)
{

    if (a > b) 
        return 1; 
     if (a == b) 
        return 0; 
     if (a < b) 
         return -1;
    
}
let arr=[5,4,1];
console.log(arr.sort(sort));//[1,4,5]*/

class Sort
{
    constructor(arr)
    {
        this.arr=arr;
    }
    sort=(arr)=>{
        console.log(this.arr.sort((a,b)=>a-b));}
    }
const obj=new Sort([5,4,2]);
obj.sort();