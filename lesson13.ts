var employee = ['a','b','c'];

let [emp1,emp2,emp3] = employee;
let [,,emp4] = employee;
let [,...emp5] = employee;

console.log(emp1);
console.log(emp2);
console.log(emp3);
console.log(emp5);