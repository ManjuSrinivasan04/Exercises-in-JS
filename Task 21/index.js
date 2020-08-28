function add(a,b)
{
    console.log(a+b);
}

add(1,2);//3

//arrow function
const addition=(a=1,b=1)=>console.log(a+b);
addition(1,2);//3