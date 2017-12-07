//inputs are all strings

// var input = document.getElementById("input");
// var submit = document.getElementById("submit");

// submit.onclick = function(){
//     //take value from input 
//     var convertedFromString = Number(input.value);
//     //check if its a number
//     //send an error alert if its not
//     //otherwise alert the number
//     if(isNaN(convertedFromString)){
//         alert("this is some bullshit!")
//     }else {
//         alert ("Hear is your number:" + convertedFromString);
//     }
// }


var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var num4 = document.getElementById("num4");
var num5 = document.getElementById("num5");
var num6 = document.getElementById("num6");
var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var output = document.getElementById("output");
var output1 = document.getElementById("output1");
var output2 = document.getElementById("output2");

function clearInputs(){
    num1.value = "";
    num2.value = "";
    num3.value = "";
    num4.value = "";
    num5.value = "";
    num6.value = "";
}
add.onclick = function (){
    var firstNum = Number(num1.value);
    var secondNum = Number(num2.value);

    output.innerHTML = firstNum + secondNum;
    clearInputs();
}
subtract.onclick = function (){
    var firstNum1 = Number(num3.value);
    var secondNum1 = Number(num4.value);

    output1.innerHTML = firstNum1 - secondNum1;
    clearInputs();
}
multiply.onclick = function (){
    var firstNum2 = Number(num5.value);
    var secondNum2 = Number(num6.value);

    output2.innerHTML = firstNum2 * secondNum2;
    clearInputs();
}