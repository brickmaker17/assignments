var removeDups = function(str){
    var output = {
        noDups: "",
        dups: ""
    }
    for(var i = 0; i < str.length; i++){
        if(output.noDups.includes(str[i])){
            output.dups += str[i];
        } else {
            output.noDups += str[i];
        }
    }
    return output;
}