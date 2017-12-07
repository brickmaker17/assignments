// function sum(a, b){ 
//     return a + b;
    
// }
// console.log(sum(200, 420));


// function findmax(a, b, c){
//     return Math.max (a, b, c);
// }
// console.log(findmax(23, 4, 200));

// function oddOrEven(num){
//     if (num % 2 == 0){
//         return "even " + num;
//     }else{
//         return "odd " + num;
//     }
// }
// console.log(oddOrEven(5))


function acceptAString(str){
    if (str.length <= 20){
        return (str + str);
    }else{
        var midpoint = Math.floor(str.length / 2);
        return str.slice(0, midpoint);
        
    }
}

console.log(acceptAString("1111111111111111111111"));