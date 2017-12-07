var input = document.getElementById("input");
var submit = document.getElementById("submit");
var display =  document.getElementById("display");

input.onfocus = function(){
    input.style.backgroundColor = "yellow";
}

submit.onclick = function(event){
    if(input.value !== ""){
        var inputText = input.value;
        var li = document.createElement("li"); //li could be "p" tag
        var txtNode = document.createTextNode(inputText);
        li.appendChild(txtNode);
        display.appendChild(li);
        input.value = "";
    }
}
    