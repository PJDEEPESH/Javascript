let str1 = "Hello";
//template literal special type of string declared by the `` this
let a = 10 ;
let b = 1222;
console.log("The value of the a is ",a," and value of b is",b,".");//this is normal but we can do in another way that is template literal that is below.
console.log(`The value os a is ${a} and value of b is ${b}.`);//This is template literal.
console.log(`This is very nice ${1+2+3}.`); 
//escape character
console.log("Hello\nWrold");//for new line 
console.log("Hello\tWorld");//for tab space
let string = "Hello World";

let string2 = "012345678";
console.log(string2.slice(1,5));//1234
console.log(string.concat(string2));//Hello World012345678
console.log(string.replace("llo","oll"));
console.log(string.charAt(4));

let user = prompt("Enter the FullName : ");
console.log(`@${user}${user.length}`);