function round100(a)
{
    
    let num=(Math.round(a/100)*100);
   // let nu=(Math.floor(a));
    //let n=(Math.ceil(a/100)*100);
    console.log(num);
   // console.log(nu);
   // console.log(n);
}

let entr=window.prompt("Enter number");//getting  input from user
round100(entr);

round100(1749);//1700
round100(856.12);//900
