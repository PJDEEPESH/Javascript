// let a = prompt("Enter how many times :");
// for(let i = 1; i <= a ; i++)
// {
//     console.log("Hi Deepu!");
//     console.log(i);
// }
// let b = 1;
// while(b <= 10)
// {
//     console.log("Hi !");
//     console.log(b);
//     b++;
// }
//for off loop
//it is used for strings and arrays for of loop
// let string = "Hello World!";
// let count = 0;
// for(let i of string)
// {
//     console.log("i =",i);
//     count++;
// }
// console.log("The Number Of Characters are : ",count);
//for in loop is is used for objects 

let student= 
{
    name: "Rahul",
    Gender: "Male",
    Age: 21,
    Cgpa: 8.4,
    isPass: true,
    class: "E4",
};

for(let key in student)
{
    console.log("Key =", key," Value =", student[key]);
    
}
for(let key in student)
    {
        console.log(key," = ",student[key]);
        
    }

console.log("Ended");