
const inputArray = ['this', 'is', 'an', 'array'];
var arr = [];
for(var i = 0; i < inputArray.length; i++) {
    arr.push()
}
// for (var i = 1; i < inputArray.length - 1; i++) {
// 	while (inputArray[i].length <= i && typeof inputArray[i + 1]!='undefined' ) {
// 		inputArray[i] += inputArray[i + 1];
// 		inputArray.splice(i + 1, 1);
// 	}
// }
console.log(inputArray);

function longest(arr) {
    let long = arr[0] + ',' + arr[1] + ',' + arr[2];
    for (var i = 0; i < arr.length - 2; i++) {
        let newLoong = arr[i] + ',' + arr[i + 1] + ',' + arr[i + 2];
        if (long.length < newLong.length) {
            long = newLong;
        }
    }
        return long.splite(',')
}

const list = ['this', 'is', 'an', 'array'];

console.log(longest(list));