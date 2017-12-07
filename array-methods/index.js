var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];  

var veg1 = vegetables.pop("lettuce");
var fru = fruit.shift("banana");
var fru1 = fruit.indexOf("orange");
var fru2 = fruit.push(fru1);
var veg2 = vegetables.length;
var veg3 = vegetables.push(veg2);
var food = fruit.concat(vegetables);
var removefood = food.splice(4, 2);
var rev = food.reverse()
// console.log(vegetables);
// console.log(fru2);
// console.log(veg3);
console.log(food);