if (5 > 3) {
    console.log("is greater than");
}

var cat = 3;
if (cat === 3) {
    console.log("is the length");
}

var dog = 5;
if (cat === dog) {
    console.log("same");
} else {
    console.log("not the same");
}

var person = {
    name: "Bobby",
    age: 12
}
if (person.age > 18) {
    console.log(person.name + " is allowed to go to the movie");
} else {
    console.log(person.name + " is not allowed to go to the movie");
}

if (person.name.startsWith ("B")) {
    console.log("is allowed into movie");
} else {
    console.log("is not allowed into movie");
}

if (person.name.startsWith ("B" + person.age > 18)) {
    console.log("is allowed into movie");
} else {
    console.log("is not allowed into movie");
}