/*function list(arr)
{
    arr.join('');  
    arr.splice(1,'2',',Dewey ','and Louie.');
    console.log(arr.join('')); //'Huey, Dewey and Louie'.
}
let arr=['Huey', 'Dewey', 'Louie'];
list(arr); */

class List{
    constructor(arr) {
        this.arr=arr;
    }
    list=(arr)=>{
        this.arr.join('');  
         this.arr.splice(1,'2',',Dewey ','and Louie.');
        console.log(this.arr.join(''));
    }
}
const obj=new List(['Huey', 'Dewey', 'Louie']);
obj.list();