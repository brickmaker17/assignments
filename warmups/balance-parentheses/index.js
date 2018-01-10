// function parentheses(str){
//     if(str.includes("()") + "()"){
//         return true;
//     }else if(str.includes("())")){
//         return false;
//     }
// }
// console.log(parentheses("())()"));

function isBalanced() {
    var parensStr = document.getElementById('input-one');
    var inputStr = parensStr.value
    if (inputStr === null) { console.log(true); }
    var expression = inputStr.split('');
    var stack = [];
    for (var i = 0; i < expression.length; i++) {
      if (isParanthesis(expression[i])) {
        if (isOpenParenthesis(expression[i])) {
          stack.push(expression[i]);
        } else {
          if (stack.length === 0) {
            return console.log(false);
          }
          var top = stack.pop(); // pop off the top element from stack
          if (!matches(top, expression[i])) {
            return console.log(false);
          }
        }
      }
    }

  

    

   
