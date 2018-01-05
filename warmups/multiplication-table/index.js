function multiplicationTable(groups, indexes){

    var array = [];
    var g;
    var i;
  
    //---Loop for the groups
    for(g = 0; g < groups; g++){
  
      //---Create multidimensional array
      array[g] = [];
  
      //---Loop for the indexes of the each group
      for(i = 0; i < indexes; i++){
  
        array[g][i] = (g + 1) * (i + 1);
  
      }
  
    }
  
    return array;
  
  }

  console.log(multiplicationTable(10, 10));