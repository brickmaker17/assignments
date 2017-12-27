document.onclick = myFunction;
let clicks = Number(localStorage.getItem("click")) || 0;
document.getElementById('clicks').innerHTML =clicks;
function myFunction() {
    clicks += 1;
    document.getElementById('clicks').innerHTML =clicks;
    localStorage.setItem("click", clicks);
    // document.getElementById("result").innerHTML = localStorage.getItem("lastname");
}

//listen to click form html
//on click run function
//function 