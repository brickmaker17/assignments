// function vowel_count(str1) {
//   var vowel_list = 'aeiouAEIOU';
//   var vcount = "";
  
//   for(var x = 0; x < str1.length ; x++) {
//     if (vowel_list.indexOf(str1[x]) !== -1) {
//       vcount = "";
//     }
  
//   }
//   return vcount;
// }
// console.log(vowel_count("The quick brown fox"));


function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }
  
  //////////////////////////////
  
  function disemvowel(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    
    return str.split('').filter(function(el) {
      return vowels.indexOf(el.toLowerCase()) == -1;
    }).join('');
  }
  
  /////////////////////////////
  
//   const disemvowel = str => str.replace(/[aeiou]/gi, '');
  console.log(disemvowel("The quick brown fox"));