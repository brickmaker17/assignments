var employees = [];
var Employee = function(name, title, salary){
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = "Full Time";
}
Employee.prototype.printEmployeeForm = function(){
    console.log("Name: " + this.name + "\nTitle: " + this.title + "\nSalary: " + this.salary + "\nStatus" + this.status)
}

var john = new Employee("John", "Manager", "100k");
var pollyStall = new Employee("Polly Staal", "Vice President of Finacne", "100,000");
var mirandaPriestly = new Employee ()

mirandaPriestly.status = "Contract";
mirandaPriestly.disposition = "Bitchy";
// console.log(mirandaPriestly);
john.printEmployeeForm();
employees.push(john, pollyStall, mirandaPriestly);
console.log(employees);