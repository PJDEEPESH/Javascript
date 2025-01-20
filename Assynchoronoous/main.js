// console.log("Hello");
// console.log("hello2");
// console.log("hello4");
// setTimeout(()=>
// {
//     console.log("This is late");
// }
// ,1000); //this is assynchronoous programming in js.he we need to mention time in milliseconds 
// console.log("hello5");
// console.log("hello6");


// call backs

// function sum(a,b)
// {
//     console.log(a+b);
// }
// function calculator(a,b,sum)
// {
//     sum(a,b);
// }
// calculator(1,2,sum);
// function sum(a,b)
// {
//     setTimeout(()=>
//     {
//         console.log("Sum: ",a+b);
//     },2000);
// }

// sum(1,2);
// sum(4,3);
// sum(5,7);
// //here the problem is we are taking 2 seconds of time to get the each data but here all are printing once because te first sum function starts 
//its time and then immediately the secons starts its time and the third one also starts its time immediately then we can say that
//all are going to finsh the statemnts in the one time so all are printig once but i want the first data forst after the 2 secinds
//I want the secind and aftet the 2 seconds i want the next this way i need to acquire this we use call back hells
//call back hell is better than the call backs ike this above is a example

// function getdata(dataid, getNextid)
// {
//     setTimeout(()=>
//     {
//         console.log("Data: ",dataid);
//         if(getNextid)
//         {
//         getNextid();
//         }
//     },2000);
// }
// getdata(1,()=>
// {
//     console.log("getting data 2");
//     getdata(2,()=>
//     {
//         console.log("Getting data 3");
//         getdata(3,()=>
//         {
//             console.log("Getting data 4");
//             getdata(4);
//         } 
//         )
//     });
// });
// this are nested call backs and it is callback hell.
//if we see the above code it is very hard to unerstand the syntax and it is not the good way to write the peogram so it is not good
//so there is better way to write this  code so we use the other way that is promises so promisses ar ebetter than the callback promises
//promises came into picture to solve the drawbacks of callback hell.

//promises

// let promise = new Promise((resolve,reject) => 
// {
//     console.log("i am a promise.");
//     // resolve("Its working");
//     reject("It has some eror");
// });

//now we write a basic example code for this 
//this is simple way of writing promise

// function getdata(getid,getnextid)
// {
//     return new Promise((resolve, reject) =>
//     {
//         setTimeout(()=>
//         {
//             console.log("Data:",getid);
//             resolve("Success");
//             // reject("Failure in the system");
//             if(getnextid)
//             {
//                 getnextid();
//             }
//         },5000);
//     });
// }
// let obj1 = getdata("Deepu");


//here below anothe thing that after the promise resolved we can perfoem some tasks using promise.then 
//or we can perfowm some actions after rjecting also promise.catch 

// const obj = () =>
// {
//     return new Promise((resolve,reject) =>
//     {
//     setTimeout(()=>
//     {
//         console.log("Hi this is the promise");
//         reject("It is failure");
//         resolve("Success");
//     },2000);
//     });
// }

// let promise = obj();
// promise.then(()=>
// {
//     console.log("It is good and running successully");
// });

// promise.catch(()=>
// {
//     console.log("We have some error for out of space");
// });

//promise chaining it is very important in promising very important concept

// function Async1()
// {
//     return new Promise((resolve,reject) =>
//     {  
//         setTimeout(()=>
//         {
//             console.log("Data1");
//             resolve("Success");

//         },4000);
//     });
// }
// function Async2()
// {
//     return new Promise((resolve,reject) =>
//     {
//         setTimeout(()=>
//         {
//             console.log("Data2");
//             resolve("Success");
//         },4000)
//     })
// }

// console.log("Fetching data1.....");

// Async1().then ((res) =>
// {
//     console.log(res);
//     console.log("Fteching data2......");
//     Async2().then((res) =>
//     {
//         console.log(res);
//         resolve("Succeess");
//     })

// });

// console.log("Fteching data2......");
// let obj2 = Async2();
// obj2.then((res) => 
// {
//     console.log(res);
// });

//this is real promise chaining

// function getdata(dataid)
// {
//     return new Promise((resolve,reject) =>
//     {
//         setTimeout(()=>
//         {
//             console.log("Data: ",dataid);
//             resolve("succes");
//         },2000);
//     });
// }
// //promise chian

// getdata(1)
//     .then((res) =>
// {
//     return getdata(2);
// })
//     .then((res) =>
// {
//     return getdata(3);
// })
//     .then((res) =>
// {
//     console.log(res);
// })

// function weatherdata()
// {
//     return new Promise((resolve,reject) =>
//     {
//         setTimeout(()=>
//         {
//             console.log("Weather Found");
//             resolve("Success");
//         },2000);
//     });
// }

// async function GetWeatherData()
// {
//     await weatherdata();
// }

//async - await

//this all above are same it give same output but it is the optimized wayb and it is good for programming this async and await

function GetData(dataid)
{
    return new Promise((resolve,reject) =>
    {
        setTimeout(()=>
        {   
            console.log("Data : ",dataid);
            resolve("success");
        },2000);
    });
}
async function Data()
{
    console.log("Fetching data 1 :");
    await GetData(1);
    console.log("Fetching data 2 :");
    await GetData(346);


}
Data();