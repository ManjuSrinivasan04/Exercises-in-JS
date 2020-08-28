/*function isEven(num)
{
    if(num%2==0)
      return true;
    else
       return false;
}
console.log(isEven(4));//true */

class Even{
  constructor(num)
  {
    this.num=num
  }
  isEven=(num)=>
  {
    console.log( this.num%2==0 ? 'true':'false');
  }
}
const obj=new Even(4);
obj.isEven();