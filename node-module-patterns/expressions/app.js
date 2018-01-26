// Either do:
// var greet2 = require("./greet2"); // Returns module.exports, which contains a "greet" property on it  
// greet2.greet();

// Or:
var greet2 = require("./greet2").greet; // Returns just the greet property of module.exports  
greet2();  
