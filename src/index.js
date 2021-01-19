console.log('Hello World');

document.getElementById('sometext').innerHTML='HELLO WORLD';

var age=prompt('Enter your age?');
document.getElementById('age').innerHTML=age;

var valid=false;
while(!valid)
{
valid=true;
if(age<=5)
{
    //close
}
else
{
    age=prompt('Enter your age');
    valid=false;
}
}
document.getElementById('age').innerHTML=age;

