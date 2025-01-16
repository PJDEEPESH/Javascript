// let div = document.querySelector("div");
// console.log(div);
// let exa = div.getAttribute("class");
// console.log(exa);
// let exa2 = div.getAttribute("name");
// console.log(exa2);
// let exa3 = div.setAttribute("name" , "Nothing");
// console.log(exa3);
// let exa4 = div.style;
// console.log(exa4);
// div.style.backgroundColor = "purple";

let createbutton = document.createElement("button");
createbutton.innerText = "Click Me";
createbutton.style.backgroundColor = "red";
createbutton.style.color = "white";
document.querySelector("body").prepend(createbutton); // to show in the web page 
console.log(createbutton);
let aa = document.querySelector("p");
aa.style.append("para2");