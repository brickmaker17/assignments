var square = document.getElementById("box");
var scro = document.getElementById("scrollbuttons");

square.onmouseover = function(){
    square.style.backgroundColor = "blue";
}

square.onmousedown = function(){
    square.style.backgroundColor = "red";
}

square.onmouseup = function(){
    square.style.backgroundColor = "yellow";
}

square.ondblclick = function(){
    square.style.backgroundColor = "green";
}

scro.onmousewheel = function(){
    square.style.backgroundColor = "orange";
}

// var box = document.getElementById("box");
window.onkeyup = function (event){
    if(event.which ===89){
        square.style.backgroundColor = "yellow";
    }else if(event.which ===66){
        square.style.backgroundColor = "blue";
    }else if(event.which ===82){
        square.style.backgroundColor = "red";
    }else if(event.which ===71){
        square.style.backgroundColor = "green";
    }else if(event.which ===79){
        square.style.backgroundColor = "orange";
    }
}

// window.addEventListener('keypress', function (e) {
//     if (y.keyCode !== 89) {
//         square.style.backgroundColor = "yellow";
//     }
// }, false);

    // function changeColor(event){
    //     var key = event.which || event.keyCode; 
    //     if(key === 89) {
    //         square.style.backgroundColor = "yellow";
    //     }
    
    // }

// square.addEventListener("keydown", function(event) {
//     event: 89 == style "yellow";
//   }
// if (key == y){
//     square.style.backgroundColor = "yellow";

// }
// square.onkeypress: (this: square, ev: y) == (square.style.backgroundColor = "yellow");
