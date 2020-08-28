/*function flat(f)
{
   
       console.log([f.join( )]);//4,9,2,3,5,7,8,1,6
    
}
let f=[[4, 9, 2],[ 3, 5, 7],[8, 1, 6]];
flat(f);*/

class Flat{
       constructor(a1,a2,a3)
       {
              this.a1=a1;this.a2=a2;this.a3=a3;
       }
       flat=(a1,a2,a3)=>console.log([...this.a1,...this.a2,...this.a3]);
}
const obj=new Flat([4,9,2],[3,5,7],[8,1,6]);
obj.flat();

