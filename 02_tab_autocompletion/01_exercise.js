// Sample employee data structure
const employees = [
  { name: "Sarah", age: 31, city: "Toronto", salary: 65000, department: "HR" },
  {
    name: "Miguel",
    age: 28,
    city: "Barcelona",
    salary: 82000,
    department: "Engineering",
  },
  {
    name: "Julia",
    age: 33,
    city: "Berlin",
    salary: 71000,
    department: "Marketing",
  },
  { name: "Raj", age: 29, city: "Mumbai", salary: 68000, department: "Sales" },
  {
    name: "Yuki",
    age: 26,
    city: "Osaka",
    salary: 59000,
    department: "Finance",
  },
];

// TODO: Calculate average age
// Hint: Use employees.reduce to sum ages and divide by length
// Try typing: employees.re<tab>

// TODO: Filter employees with salary > 60000
// Hint: Use employees.filter
// Try typing: employees.fi<tab>

// TODO: Group employees by department
// Hint: Use employees.reduce to create an object
// Try typing: employees.re<tab>

// TODO: Calculate average salary by department
// Hint: First group by department, then use Object.entries
// Try typing: Object.en<tab>

// TODO: Sort employees by age in descending order
// Hint: Use employees.sort
// Try typing: employees.so<tab>

// TODO: Add a 10% bonus to each employee's salary
// Hint: Use employees.map to create new objects with bonus
// Try typing: employees.m<tab>
