// function isPalindrome(str){
//     let re = /[\w_]/g;
//     let lowRegStr = str.toLowerCase().replace(re, '');
//     let reverseStr = lowRegStr.split('').reverse().join('');
//     return reverseStr === lowRegStr;
// }
// isPalindrome("Star Rats");

// function isPalindrome(str) {
//     var re = /[^A-Za-z0-9]/g;
//     str = str.toLowerCase().replace(re, '');
//     var len = str.length;
//     for (var i = 0; i < len/2; i++) {
//       if (str[i] !== str[len - 1 - i]) {
//           return false;
//       }
//     }
//     return true;
//    }
//    isPalindrome("A man, a plan, a canal. Panama");

function palindrome(myString){

    /* remove special characters, spaces and make lowercase*/
    var removeChar = myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    
    /* reverse removeChar for comparison*/
    var checkPalindrome = removeChar.split('').reverse().join('');
    
    /* Check to see if myString is a Palindrome*/
    if(removeChar === checkPalindrome){
      
      document.write("<div>"+ myString + " is a Palindrome <div>");
    }else{
      
      document.write("<div>" + myString + " is not a Palindrome </div>");
    }
    }
    palindrome('"Star Rats"')
    palindrome('"Madam"')
    palindrome('"palindrome"')
    palindrome('"I madam, I made radio! So I dared! Am I mad?? Am I?!"')
    palindrome('"2,3,4,3,2"')
    palindrome('"7,10,7,8,9"')

module.exports = palindrome