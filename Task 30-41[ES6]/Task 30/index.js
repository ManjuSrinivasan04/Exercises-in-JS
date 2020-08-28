/*function nand(b1,b2)
{
    let x =b1 && b2;
    let y = !x;
    console.log(y);
}
nand(true,true);//false
nand(true,false);//true
nand(false,true);//true
nand(false,false);//true */

class Nand {
    constructor(a,b)
    {
        this.a=a;
        this.b=b;
    }
    nand=()=>
    {
        let x = this.a && this.b
        let y=!x;
        console.log(y)
    }

}
const obj=new Nand(true,true);
obj.nand();