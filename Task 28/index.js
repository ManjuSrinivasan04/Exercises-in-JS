function add(str)
{
    let s=str.split("+");
    //console.log(s);
    let sum=0;
    for(let i=0;i<s.length;i++)
    {
       sum+=(parseInt(s[i]));
    }
    console.log(sum);
}

let str2=window.prompt("Enter the string: ");

add(str2);

add('102+17');//119