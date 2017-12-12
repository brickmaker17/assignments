var rs = require("readline-sync");

var name = rs.question("Name? ");
var age = rs.question("Age? ");
var color = rs.question("favorite color?");

console.log(name.toUpperCase() + age + color);