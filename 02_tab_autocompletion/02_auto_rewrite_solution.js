// TODO: Rewrite this function using array methods (filter)
function filterEvenNumbers(numbers) {
  return numbers.filter((num) => num % 2 === 0);
}

// TODO: Rewrite this function using an arrow function
const multiplyByTwo = (x) => x * 2;

// TODO: Rewrite this class using a factory function pattern
const Person = (name, age) => ({ name, age });

// TODO: Rewrite this function using template literals
const greet = (name, age) => `Hello, ${name}! You are ${age} years old.`;

// TODO: Rewrite this function using Object.fromEntries and map

// TODO: Rewrite this function using Object.fromEntries and map
function createSquareDict(numbers) {
  return Object.fromEntries(numbers.map((num) => [num, num * num]));
}

// TODO: Rewrite this function using array methods (find)
function findFirstEven(numbers) {
  return numbers.find((num) => num % 2 === 0);
}

// TODO: Rewrite this class to use static factory methods
const Rectangle = (width, height) => ({ width, height });

const area = (rectangle) => rectangle.width * rectangle.height;

// TODO: Rewrite this function using proper error handling
function calculateAverage(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
}

// TODO: Rewrite this function using a higher-order function for validation
function calculateCircleArea(radius) {
  if (radius < 0) {
    throw new Error("Radius cannot be negative");
  }
  return Math.PI * radius * radius;
}

// TODO: Rewrite this class to use private fields and getters/setters
const BankAccount = (initialBalance) => ({ balance: initialBalance });

// TODO: Rewrite this function using rest parameters
const concatenateStrings = (separator, ...args) => args.join(separator);

// TODO: Rewrite these classes using composition instead of inheritance
const Vehicle = (make, model, year) => ({ make, model, year });

const Car = (make, model, year) => ({ make, model, year });

const displayInfo = (car) => `${car.year} ${car.make} ${car.model}`;

// TODO: Rewrite this function using async/await and proper error handling
const fetchData = (url) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from " + url);
    }, 1000);
  });

// Example usage
const runExamples = () => {
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
};

// Run the examples
runExamples();
