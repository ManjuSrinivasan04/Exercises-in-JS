/*function toArray(a,b)
{
    let arr= new Array(a,b);
    console.log(arr);

}
toArray(1,2);//[1,2]*/

class Arrays{
    constructor(a,b)
    {
        this.a=a;
        this.b=b;
    }
    toArray=(a,b)=>
    {
        let arr=new Array(this.a,this.b);
        console.log(arr);
    }
}
const obj=new Arrays(1,2);
obj.toArray();
