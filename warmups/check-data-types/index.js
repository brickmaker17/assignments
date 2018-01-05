

//loop through the first layer 
//check whether each arrays contents all share the same data type within the array
//check whether each arrays contents all share the same data type Across the array
function checkTypes(arr) {
    let initial = arr [0] [0];
    return arr.every(subArr =>
        subArr.every(value =>
            typeof value === typeof initial
        )
    )
}
console.log(checkTypes([[1,2,3],["a","b","c"],[true, true, true]]));