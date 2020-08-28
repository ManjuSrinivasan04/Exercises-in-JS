/*function getLengthArray()
{
    console.log(arr.length);//6
}
let arr=[1,2,3,4,5,6];
getLengthArray(arr);*/

class GetArray{
    constructor(arr)
    {
        this.arr=arr
    }
    getLengthArray=(arr)=>console.log(this.arr.length)
}
const obj=new GetArray([1,2,3,4,5]);
obj.getLengthArray();

