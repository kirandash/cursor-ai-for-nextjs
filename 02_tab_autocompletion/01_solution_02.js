// Sample employee data structure
const availableEmployees = [
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
availableEmployees.reduce((sum, emp) => sum + emp.age, 0) /
  availableEmployees.length;

// TODO: Filter employees with salary > 60000
availableEmployees.filter((emp) => emp.salary > 60000);

// TODO: Group employees by department
const employeesByDepartment = availableEmployees.reduce(
  (departments, employee) => {
    departments[employee.department] = departments[employee.department] || [];
    departments[employee.department].push(employee);
    return departments;
  },
  {}
);

// TODO: Calculate average salary by department
availableEmployees.reduce((acc, emp) => {
  acc[emp.department] = acc[emp.department] || [];
  acc[emp.department].push(emp);
  return acc;
}, {});

// TODO: Sort employees by age in descending order
availableEmployees.sort((a, b) => b.age - a.age);

// TODO: Add a 10% bonus to each employee's salary
availableEmployees.map((emp) => ({ ...emp, salary: emp.salary * 1.1 }));
