/* there are three keywords to declare variables var,let and const
  
variable var it is a container that stores value,the value contained inside a variable can be any 
JavaScript data type, including a number, string, or object
Variables can also be reassigned and given a new value   
var declaration are function scope. */

var name=niranjan;
var age=25;

var x=1;
var x=2;
console.log(x);//output 2

let y=1;
let y=2;
console.log(y); //output Uncaught SyntaxError

/* let and const resolves this issue by throwing an error when attempting to use a variable before declaring it 
or attempting to declare a variable more than once.

const which are values that cannot be modified or changed, we can go on iterating but cannot change.*/

const name = "niranjan";
 name="naidu";
 console.log(name);//uncaught typeerror


/*Function declarations load before any code is executed 
   Function expressions load only when the interpreter reaches that line of code*/


helloDeclaration()
function helloDeclaration()
{
    var declar=" this is function declaration";
    console.log(declar);
}


helloExpression()
var helloExpression=function()
{
    var express="this is function expression";
    console.log(express);// not works because called after intialization, js is single thread
}


var helloExpression=function()
{
    var express="this is function expression";
    console.log(express);
}
helloExpression()




