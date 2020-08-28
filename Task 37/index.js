/*function rotate(arr)
{
    arr.shift(arr.push(arr[0]));
    return arr;
    
    
}
let arr=['a','b','c'];
console.log(rotate(arr));//['b','c','a']; */

class Rotate{
    constructor(arr)
    {
        this.arr=arr;
    }
    rotate=(arr)=>
    {
        this.arr.shift(this.arr.push(this.arr[0]));
        console.log(this.arr);
    }
}
const obj=new Rotate(['a','b','c']);
obj.rotate();