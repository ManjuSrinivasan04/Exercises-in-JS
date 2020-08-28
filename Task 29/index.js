function addWithSurcharge(a,b)
{
    surcharge=a+b;
    if(a<=10 && b<=10)
    {
        console.log(surcharge+1);
    }
    if((a>=10 && a<=20) && (b>=10 && b<=20))
    {
        console.log(surcharge+2);
    }
    if((a>20 && b>20))
    {
        console.log(surcharge+3);
    }
}

addWithSurcharge(10,10);//21 and 22