// TODO: Make this test function async
const test = async () => {
  console.log("Hello World");
};

test();

// TODO: Create a function that returns a fibonacci sequence of a given length
/**
 * Generates a Fibonacci sequence of the specified length.
 * The sequence starts with [0, 1] and each subsequent number is the sum of the previous two.
 *
 * @param {number} length - The desired length of the Fibonacci sequence
 * @returns {number[]} An array containing the Fibonacci sequence
 *
 * @example
 * fibonacci(5) // returns [0, 1, 1, 2, 3]
 * fibonacci(8) // returns [0, 1, 1, 2, 3, 5, 8, 13]
 */
const fibonacci = (length) => {
  // Initialize sequence with first two Fibonacci numbers
  const sequence = [0, 1];

  // Generate subsequent numbers by adding previous two numbers
  for (let i = 2; i < length; i++) {
    // Get previous two numbers and add them to generate next number
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
};

// Basic usage - first 10 Fibonacci numbers
console.log("First 10 Fibonacci numbers:");
console.log(fibonacci(10));
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Small sequence - first 5 numbers
console.log("\nFirst 5 Fibonacci numbers:");
console.log(fibonacci(5));
// Output: [0, 1, 1, 2, 3]

// Minimum meaningful sequence (2 numbers)
console.log("\nMinimum sequence (2 numbers):");
console.log(fibonacci(2));
// Output: [0, 1]

// Larger sequence - first 15 numbers
console.log("\nFirst 15 Fibonacci numbers:");
console.log(fibonacci(15));
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]

// Show the sum of all numbers in a sequence
console.log("\nSum of first 10 Fibonacci numbers:");
const tenNumbers = fibonacci(10);
const sum = tenNumbers.reduce((acc, curr) => acc + curr, 0);
console.log(`Numbers: ${tenNumbers}`);
console.log(`Sum: ${sum}`);
// Output: Numbers: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// Output: Sum: 88
