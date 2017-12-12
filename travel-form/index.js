var sex = document.querySelector('input[name=gender]:checked').value;


function submitByName(en) {
    var fName = document.getElementsByName("firstName") [0].value;
    var lName = document.getElementsByName("lastName") [0].value;
    var age = document.getElementsByName ("age") [0].value;
    var destination = document.getElementsByName ("destination") [0].value;
    var foodres = document.getElementsByName ("foodrestriction") [0].value;
    var radio = document.getElementsByName ("radio") [0].value;
    // var cbarry = document.getElementsByName(en);
    // for(var i=0;i<cbarry.length;i++){
        // var cb = document.getElementsByClassName(cbarry[i].id)
    // }

    var x = document.getElementsByName('form_name');
    x[0].submit();
    alert(" FirstName : " + fName + "\n LastName : " + lName +"\n Age : " + age + "\n Gender : " + radio + "\n Destination : " + destination + "\n Dietary restrictions: " + foodres);
    
}


