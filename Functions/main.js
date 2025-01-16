//Definiing the function
/*
function Myfunction()
{
    console.log("Hi this is Deepesh\nI am learning javascript.");
}
Myfunction();
function sum(a,b)
{
    console.log(a+b);
}
sum(3,2);
function msg(a)
{
    console.log(a);
}
function greetings(name) //this is called the parameter passing in the function. 
{
    console.log(`${name} here what's your name`);
}
let a = prompt("Enter the value : ");
msg(a); 
let name = prompt("Enter your name : ");
greetings(name);//this is called a argument is passing into the function.
*/
// Arrow Functions
//compact way of writing the function
//Modern js 
/*
const sumarraow = (a,b) =>
{
    console.log(a+b);
}
sumarraow(2,5);
 const multi = (a,b)  =>
{
    console.log(a*b);
}
multi(7,3);
let add = (a,b,c,d) =>
{
    console.log(a+b+c+d);
}
add(1,2,3,4);
*/

//print numbner of vowels in a string 
/*
let string = prompt("Enter the string: ");
function countvowels(string)
{
    let count = 0;
    for(let i of string)
    {
        
        if(i === "a" || i === "e" || i === "i" || i === "o" || i === "u")
        {
            count++;
        }
    }
    console.log(count);
}
countvowels(string);
*/

//Same in the arro function
/*
const countvowels = (string) =>
{
    let count = 0;
    for(let i of string)
    {
        
        if(i === "a" || i === "e" || i === "i" || i === "o" || i === "u" )
        {
            count++;
        }
    }
    console.log(count);
}
let string = prompt("Enter the string");
countvowels(string);
*/

//for each loop in normal function for eac loop means in an array that everry elemt needs to be perfoem some action sio we use forEach loop.
/*
let cities = ["Nellore","Banglore","Hyderabad","cochin","Pune","Bombay"];
cities.forEach(function print(val,index,ci)
{
    console.log(val,index,ci);
});

// let cities = ["Nellore","Banglore","Hyderabad","cochin","Pune","Bombay"];
// //now pass in arrow function
// cities.forEach((val,index,cities) =>
// {
//     console.log(val,index,cities);
// });
*/

//question
/*
let numbers = [2,3,4,6,7,8,3,1];
numbers.forEach(function square(val)
{
    val *= val;
    console.log(val);
});
*/

//ques 
/*
let arr = [50,78,90,95,34,98,99,34,97];
let output = arr.filter((val) => 
{
    return val >= 90;
});
console.log(output);
*/

//ques

let n = parseInt(prompt("Enter the number of elements you need : "));
let arr = [];
for(let i = 0 ; i<n ; i++)
{
    arr[i] = parseInt(prompt("Enter elements ; "));
}
console.log(arr);
let sum = arr.reduce((res,curr) => 
{
    return res + curr;
});
console.log(sum);
let product = arr.reduce((prev,curr) =>
{
    return prev * curr;
});
console.log(product);