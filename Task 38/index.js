/*function  add(array,search)
{
    if(array.indexOf(search)!==-1)
    {
        console.log(array);
    }
    else
    {
        console.log(array.concat(search));
    }
    
}

//let array=['Apple','Mango','orange'];
//let search='Banana';
let array=[1,2];
let search=2;
add(array,search);//[1,2]*/

class Add{
    constructor(arr,search)
    {
        this.arr=arr;
        this.search=search;
    }
    add=(arr,search)=>
    {
        if(this.arr.indexOf(this.search)!==-1)
    {
        console.log(this.arr);
    }
    else
    {
        console.log(this.arr.concat(this.search));
    }
    }
}
const obj=new Add([1,2],3);
obj.add();