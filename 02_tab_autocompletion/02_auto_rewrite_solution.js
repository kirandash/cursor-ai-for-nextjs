// TODO: Rewrite this function using array methods (filter)
function filterEvenNumbers(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result.push(numbers[i]);
    }
  }
  return result;
}

// TODO: Rewrite this function using an arrow function
function multiplyByTwo(x) {
  return x * 2;
}

// TODO: Rewrite this class using a factory function pattern
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  toString() {
    return this.name + " (" + this.age + ")";
  }
}

// TODO: Rewrite this function using template literals
function greet(name, age) {
  return "Hello, " + name + "! You are " + age + " years old.";
}

// TODO: Rewrite this function using Object.fromEntries and map
function createSquareDict(numbers) {
  const result = {};
  for (let num of numbers) {
    result[num] = num * num;
  }
  return result;
}

// TODO: Rewrite this function using array methods (find)
function findFirstEven(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      return numbers[i];
    }
  }
  return null;
}

// TODO: Rewrite this class to use static factory methods
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

// TODO: Rewrite this function using proper error handling
function calculateAverage(numbers) {
  if (numbers.length === 0) return 0;
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum / numbers.length;
}

// TODO: Rewrite this function using a higher-order function for validation
function calculateCircleArea(radius) {
  if (radius < 0) {
    throw new Error("Radius cannot be negative");
  }
  return Math.PI * radius * radius;
}

// TODO: Rewrite this class to use private fields and getters/setters
class BankAccount {
  constructor(initialBalance) {
    this.balance = initialBalance;
  }
}

// TODO: Rewrite this function using rest parameters
function concatenateStrings(separator) {
  const args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}

// TODO: Rewrite these classes using composition instead of inheritance
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

class Car extends Vehicle {
  displayInfo() {
    return this.year + " " + this.make + " " + this.model;
  }
}

// TODO: Rewrite this function using async/await and proper error handling
function fetchData(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from " + url);
    }, 1000);
  });
}

// Example usage
function runExamples() {
  console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
  console.log(multiplyByTwo(5));
  console.log(new Person("Alice", 30).toString());
  console.log(greet("Bob", 25));
  console.log(createSquareDict([1, 2, 3, 4]));
  console.log(findFirstEven([1, 3, 5, 6, 7, 8]));
  const rect = new Rectangle(5, 3);
  console.log(rect.area());
  console.log(calculateAverage([1, 2, 3, 4, 5]));
  console.log(calculateCircleArea(5));
  const account = new BankAccount(1000);
  console.log(account.balance);
  console.log(concatenateStrings(", ", "apple", "banana", "cherry"));
  const car = new Car("Toyota", "Camry", 2022);
  console.log(car.displayInfo());
  fetchData("https://api.example.com/data")
    .then(console.log)
    .catch(console.error);
}

// Run the examples
runExamples();
