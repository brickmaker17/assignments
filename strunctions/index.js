
    var cars = {
        brands: "subaru, bmw, kia, tesla, ford",
        model: "wrx sti, i8, optima, roadster, raptor",
        type: "sedan, hatchback, truck"
    } 
// function dealership(){
//     return cars.brands.concat(cars.model.concat(cars.type));
// }

// console.log(dealership());

function dealership1(){
    return cars.brands.split("");
}

function dealership2(){
    return cars.model.indexOf("s")
}

function dealership3(){
    return cars.type.toUpperCase();
}
console.log(dealership3());



