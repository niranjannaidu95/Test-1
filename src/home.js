console.log('hello');
// alert('hello this is niranjan');

//variables
var b='smothie';
console.log(b);

var someNumber=45;
console.log(someNumber);

document.getElementById('sometext').innerHTML='hey there';

var age=prompt('what is your age?');
document.getElementById('age').innerHTML=age;

//number in js
var num1=10;
num1--;
console.log(num1);

/*function
1. create a function
2. call the function
*/
//creating
function fun() {
    console.log('this is a function');
}    
//call
fun();
/* lets create a function that take in a name and says hello followed by your name

for example
name:"nira"
return:"hella nira"
*/

function greeting(yourName){
    var result= 'Hello'+ ' ' + yourName;//STRING CONCATINATION
    console.log(result);
}
var name=prompt('what is your name?');
greeting(name);

//how do argument work in function?
//how do we add two numbers togther in afunction?

function sumNumbers(num1, num2){
    var result=num1 + num2;
    console.log(result);
}
sumNumbers(10,20);









