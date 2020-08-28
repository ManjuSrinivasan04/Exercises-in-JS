/*function getFirstElement()
{
    let x=arr[0];
    console.log(x);
    
}
let arr=[1,2,3,4,5];
getFirstElement(arr);//1 */

class Element{
    constructor(arr)
    {
        this.arr=arr;
    }
    getFirstElement=(arr)=>console.log(this.arr[0]);
}
const obj=new Element([1,2,3,4]);
obj.getFirstElement();