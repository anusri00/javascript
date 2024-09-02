//Variables Declarations

/*Create variables
var firstName = "AnuSree";
let lastName = "Pampana";
const age = 19;
console.log(firstName,lastName,age);
*/

/*Variable scope
var Y = 5;
let X = 10;
const Z = 15;
function scope(){
    var y = 20;
    let x = 15;
    const z = 20;
    console.log(Y);
    console.log(X);
    console.log(Z);
    console.log(x);
    console.log(y);
    console.log(z);
}
scope();
//console.log(x); // ReferenceError: x is not defined
//console.log(y); // ReferenceError: y is not defined
//console.log(z); // ReferenceError: z is not defined
console.log(X);
console.log(Y);
console.log(Z);
*/

//Operators

/*Arithmetic operators
let a = 15;
let b = 10;
res = a*b - a+b % a/b;
result = ((a*b)-(a+b)) % (a/b); 
console.log(res);
console.log(result);
*/

/*Comparison operators
let a = 50;
let b = 25;
console.log(a==b, a!=b, a===b, a!==b, a<b, a>b, a<=b, a>=b);
*/

/*Logical operators
let a = 50;
let b = 25;
console.log(a<b && a!=b, a<b || a==b, !(a<b && a>b));
*/

//Data Types

/*Primitive data types
let varaible = 50;
console.log(typeof varaible);
varaible = "Hello";
console.log(typeof varaible);
varaible = true;
console.log(typeof varaible);
console.log(typeof null);
let x;
console.log(typeof x);
*/

/*Object data type
let x = {firstName : "AnuSree", lastName : "Pampana", age : 19, display : function(){return "Hello I\'m " + this.firstName + " " + this.lastName;}}
console.log(x.firstName, x.lastName, x.age, x.display())
x.age = 20;
console.log(x.age)
*/

//Type Conversion and Coercion

/*Explicit type conversion
let a = 25;
let b = "50";
let c = a>b;
console.log(Number(b));
console.log(String(25));
console.log(Boolean(c));
console.log(Number(true+25));
console.log(String(5.0));
console.log(String(50>25));
*/

/*Implicit type coercion
console.log("3"+3);
console.log("3"*3);
console.log(null-3);
console.log(undefined+3);
console.log(3+true);
*/

//Strings and Template Literals

/*String manipulation
let str = "Hello";
console.log(str+",AnuSree");
console.log(str.charAt(4));
console.log(str.length);
str = "Hello Anu";
console.log(str.substring(6,10));
*/

/*Template literals
age = 18;
console.log(age : ${age+2});
console.log(`It is a multiline string
first line
second line 
age = ${age}`);
*/

//Decision Making Statements

/*If-else statements
let number = -5;
if(number > 0) console.log("Positive");
else if(number == 0) console.log("Zero");
else console.log("Negative");
*/

/*Switch statements
let a = 10;
let b =56;
let opr = "*";
switch(opr){
    case "+" : console.log(a+b);
               break;
    case "-" : console.log(a-b);
               break;
    case "*" : console.log(a*b);
               break;
    case "/" : console.log(a/b);
               break;
    case "%" : console.log(a%b);
               break;
}
*/


//Use Strict

/*Enable strict mode
"use strict";
//x = 10 give's ReferenceError: x is not defined
//varaibles must be declared
var x = 10
console.log(x);
*/

//Function Call and Its Definition

/*Function declaration
function sum(a, b){
    console.log(a+b);
}
sum(7,9);
*/

/*Function expression
function sum(a, b){
    return a+b;
}
x = sum(7,9);
console.log(x);
*/

//Passing Parameters to Functions

/*Passing arguments
function sum(a, b){
    console.log(a+b);
}
sum("7",9);
*/

/*Default parameters
function greetings(name = "sir"){
    console.log("Hello " + name);
}
greetings();
greetings("Anu");
*/

//Return Statement

/*Returning values
function div(a, b){
    return a/b;
}
result = div(10,7);
console.log(result);
*/

/*Chaining function calls

*/
function sum(a, b){
    return a+b;
}
function mul(a,b){
    console.log(a*b);
}
mul(sum(10,3), 7);//mul(30,7)