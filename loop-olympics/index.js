// for (i = 0; i < 10; i++) {
//     console.log(i)
// }

// for (i = 9; i >= 0; i--) {
//     console.log(i)
// }

var fruit = ["banana", "orange", "apple", "kiwi"]

for (var i = 0; i < fruit.length; i++ ) {
    console.log(fruit[i]);
}


var arr = [];
for (i = 0; i < 10; i++) {
    arr.push(i);
    
    }
    console.log(arr);

for (i = 0; i < 100; i+=2){
    console.log(i);
}

var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
var fru1 = [];
var i = fruit; 
var fru2 = fruit.length;
for (i = 0; i < fru2; i+=2){
    fru1.push(fruit[i]);
}
console.log(fru1);
