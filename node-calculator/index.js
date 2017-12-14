var rs = require("readline-sync");

var number = rs.question("Number1?");
var number1 =rs.question("Number2?")
function add(){
    return Number(number) + Number(number1);
}

function multi(){
    return Number(number) * Number(number1);
}

function divi(){
    return Number(number) % Number(number1);
}
function sub(){
    return Number(number) - Number(number1);
}
var math = ["add", "multi", "divi", "sub"];
var result = rs.keyInSelect(math, "What function do you want?");
// var math = [add(), multi(), divi(), sub1]


function total() {
    
if (math[result] === 'add') {
    return add();
}else if (math[result] === 'multi') {
    return multi();
}else if (math[result] === 'divi') {
    return divi();
}else if (math[result] === 'sub') {
    return sub();
}
}
console.log(total());





// console.log(add());
// console.log(multi());
// console.log(divi());
// console.log(sub());
