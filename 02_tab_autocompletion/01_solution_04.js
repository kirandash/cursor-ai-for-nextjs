// Sample employee data structure
// each employee object should have 10 properties. And total 6 employees.
const availableEmployees = [
  {
    name: "Sarah",
    age: 31,
    city: "Toronto",
    salary: 65000,
    department: "HR",
    skills: ["JavaScript", "React", "Node.js"],
    isManager: false,
    isSenior: false,
    isJunior: true,
    isIntern: false,
  },
  {
    name: "Miguel",
    age: 28,
    city: "Barcelona",
    salary: 82000,
    department: "Engineering",
    skills: ["JavaScript", "React", "Node.js"],
    isManager: false,
    isSenior: false,
    isJunior: true,
    isIntern: false,
  },
  {
    name: "Julia",
    age: 33,
    city: "Berlin",
    salary: 71000,
    department: "Marketing",
    skills: ["JavaScript", "React", "Node.js"],
    isManager: false,
    isSenior: false,
    isJunior: true,
    isIntern: false,
  },
  {
    name: "Raj",
    age: 29,
    city: "Mumbai",
    salary: 68000,
    department: "Sales",
    skills: ["JavaScript", "React", "Node.js"],
    isManager: false,
    isSenior: false,
    isJunior: true,
    isIntern: false,
  },
  {
    name: "Yuki",
    age: 26,
    city: "Osaka",
    salary: 59000,
    department: "Finance",
    skills: ["JavaScript", "React", "Node.js"],
    isManager: false,
    isSenior: false,
    isJunior: true,
    isIntern: false,
  },
  {
    name: "Alice",
    age: 25,
    city: "New York",
    salary: 50000,
    department: "HR",
    skills: ["JavaScript", "React", "Node.js"],
    isManager: false,
    isSenior: false,
    isJunior: true,
    isIntern: false,
  },
];

const getAverageSalary = (employees) => {
  return employees.reduce((sum, emp) => sum + emp.salary, 0) / employees.length;
};

const getAverageAge = (employees) => {
  return employees.reduce((sum, emp) => sum + emp.age, 0) / employees.length;
};

const getAverageSalaryByDepartment = (employees) => {
  return employees.reduce((acc, emp) => {
    acc[emp.department] = acc[emp.department] || [];
    acc[emp.department].push(emp);
    return acc;
  }, {});
};

const sortEmployeesByAge = (employees) => {
  return employees.sort((a, b) => b.age - a.age);
};

const addBonusToSalary = (employees) => {
  return employees.map((emp) => ({ ...emp, salary: emp.salary * 1.1 }));
};
