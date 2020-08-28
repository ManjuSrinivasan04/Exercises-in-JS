/*function concatUp(arr1,arr2)
{
   
        if(arr1.length>arr2.length)
           {
             console.log(arr2.concat(arr1));//[3,2,1]
           } 
        else if(arr1.length<=arr2.length)
           {
            console.log(arr1.concat(arr2));//[5,7,6,8]
           }
      
}
let arr1=[1,2];//[5,7]
let arr2=[3];//[6,8]
concatUp(arr1,arr2); */

class Concat{
   constructor(arr1,arr2)
   {
      this.arr1=arr1;
      this.arr2=arr2;
   }
   concatUp=(arr1,arr2)=>
   {
      if(this.arr1.length>this.arr2.length)
      {
        console.log([...this.arr2,...this.arr1]);
      } 
     else if(this.arr1.length<=this.arr2.length)
      {
       console.log([...this.arr1,...this.arr2]);
      }
   }
}
const obj=new Concat([1,2],[3]);
obj.concatUp();