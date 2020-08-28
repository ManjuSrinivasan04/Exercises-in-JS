/*function setFirstElement(arr,value)
{
    arr[0]=value;
    console.log(arr);
    
}
let arr=[1,2];
setFirstElement(arr,3);//[3,2]*/

class Element{
    constructor(arr,val)
    {
        this.arr=arr;
        this.val=val;
    }
    setFirstElement=(arr,val)=> {
        this.arr[0]=this.val;
        console.log(this.arr);}
}
const obj=new Element([1,2],3);
obj.setFirstElement();