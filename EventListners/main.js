// console.log("Event Listeners");
// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () =>
// {
//     console.log("Single click through the outer js file.")
// };
// let btn2 = document.querySelector("#btn2");
// btn2.ondblclick = () =>
// {
//     console.log("Double click through the outer js file");
// };
// let para = document.querySelector("#para");
// para.onmouseover = () =>
// {
//     console.log("Hover over the mouse through the external js file");
// }


// //event Listenrs
// let btn1 = document.querySelector("#btn1");
// btn1.addEventListener("click" ,()=>
// {
//     console.log("Event was printed by handler1.");
// });
// btn1.addEventListener("click",()=>
// {
//    console.log("Event was printed by handler2.") 
// });
// btn1.addEventListener("click",()=>
// {
//     console.log("Event was printed by handler3.") 
// });
// btn1.addEventListener("click",()=>
// {
//     console.log("Event was printed by handler4.") 
// });

// //there is one thing call removeEventListener to do that we use the other thing that is node.removeEventHandler 
// //to use this we usedeclare the event in a variable 
// let handler5 =  ()=>
// {
//     console.log("This is printig through the event handler 5.");
// };
// let handler6 = ()=>
// {
//     console.log("This is another thing");
// };
// btn1.addEventListener("click",handler5);
// btn1.addEventListener("mouseover",handler6);

// btn1.removeEventListener("click",handler5);

//this is a event if we click the backgtound will chag=ne 

// let button = document.querySelector("#button");
// let curren ="white";
// let handle1 = ()=>
// {
//     if(curren === "white")
//     {
//         curren ="red";
//         document.querySelector("body").style.backgroundColor="red";
        
//     }
//     else
//     {
//         curren ="white";
//         document.querySelector("body").style.backgroundColor="white";
//     }
//     console.log(curren);
// };
// button.addEventListener("click",handle1);
// button.addEventListener("click",()=>
// {
//     console.log("hello");
// });

let things = document.querySelector("#pp");
let curr = "white";
let handle1 = ()=>
{
    if(curr === "white")
    {
        curr = "red";
        document.querySelector("body").style.backgroundColor = "red";
    }
    else
    {
        curr = "white";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(curr);
};
things.addEventListener("mouseover",handle1);