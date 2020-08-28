function indexOfIgnoreCase(str1,str2)
{
    let s1=str1.toLowerCase();
    let s2=str2.toLowerCase();
    console.log(s1.indexOf(s2));
}

indexOfIgnoreCase('bit','IT');//1
//indexOfIgnoreCase('bIt','IT');
//indexOfIgnoreCase('bit','it');