fucniton genPassword(int){
    // let characters = "abfoahgfoanv;o3g49g94nosvidjegrve;a"
    var output = "";
    for(var i = 0; i < int; i++){
        output += String.fromCharCode(Math.floor(Math.random() * 93) + 33);
    }
    return output
}
genPassword(7);
// console.log(String.fromCharCode(65))