// const student = {
//     name :"Deepu",
//     marks: 9.4,
//     printmarks: function()
//     {
//         console.log('marks : ',this.marks);//to call this we need to write  below command.
//     },
// };
// console.log(student.printmarks());
// // this is just direct declaration of the object thwere is anoither method also.
// this is just a object we hjave created 
//when ever a object we create inside an object prototype object is automaticalled create which has aome properties and behaviours and we can also create our own prototype this below is the way 

// const tax = 
// {
//     calTax() 
//     {
//         console.log("The tax is 10%");
//     }
// };

// const ramu =
// {
//     salary:  5000,
// };

// ramu.__proto__ = tax;

class car {
    constructor(brand,milage)
    {
        console.log("It is used to initiaze the objects");
        this.brand = brand;
        this.milage = milage;
    }
    start() {
        console.log("Start the car");
    }
    stop() {
        console.log("Stop the car");
    }
    
}

let car1 = new car("fortuner",10);
console.log(car1);
// car1.brandName("Toyota"); // Set the brand
// // Get the brand and print it

let car2 = new car("benz",9);
console.log(car2);
let car3 = new car("Bmw",14);
console.log(car3);



