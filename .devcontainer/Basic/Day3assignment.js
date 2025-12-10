// tasks_all.js
// Run with: node tasks_all.js

// ---------- Task 1: Student Marks (average using reduce) ----------
let marks = [80, 90, 70, 85, 95];

// calculate sum using reduce, then average
let sumMarks = marks.reduce((acc, curr) => acc + curr, 0);
let avgMarks = sumMarks / marks.length;

console.log("Task 1: Student Marks");
console.log("Marks:", marks);
console.log("Average Marks:", Math.round(avgMarks)); // prints 84 as in example
console.log(""); // blank line for readability

// ---------- Task 2: Filter Even Numbers (using filter) ----------
let numbers = [1,2,3,4,5,6,7,8,9];

let evens = numbers.filter(n => n % 2 === 0);

console.log("Task 2: Filter Even Numbers");
console.log("Original numbers:", numbers);
console.log("Even numbers:", evens);
console.log("");

// ---------- Task 3: Shopping Cart (object, calculate total bill) ----------
let cart = {
  item: "Laptop",
  price: 45000,
  quantity: 2
};

let totalBill = cart.price * cart.quantity;

console.log("Task 3: Shopping Cart");
console.log("Cart:", cart);
console.log("Total bill:", totalBill);
console.log("");

// ---------- Task 4: Movie List (add, remove last, print final list using loop) ----------
let movies = ["Inception", "The Dark Knight", "Interstellar"];

// Add one movie
movies.push("The Matrix");

// Remove last movie
movies.pop();

// Print final list using loop
console.log("Task 4: Movie List");
console.log("Final movie list:");
for (let i = 0; i < movies.length; i++) {
  console.log(`${i + 1}. ${movies[i]}`);
}
console.log("");

// ---------- Task 5: User Profile JSON (object -> JSON -> back to object) ----------
let user = { name: "Aman", age: 21, course: "JS" };

// Convert object to JSON string and store in variable
let userJSON = JSON.stringify(user);

// Convert back to object
let userFromJSON = JSON.parse(userJSON);

console.log("Task 5: User Profile JSON");
console.log("Original object:", user);
console.log("JSON string:", userJSON);
console.log("Parsed object:", userFromJSON);
console.log("");

// ---------- Bonus Task 6: Find Max Number in Array (without built-in max) ----------
let arr = [10, 40, 25, 80, 15];

// Find max using a simple loop (no Math.max)
let maxVal = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > maxVal) {
    maxVal = arr[i];
  }
}

console.log("Bonus Task 6: Find Max Number");
console.log("Array:", arr);
console.log("Max value (no built-in):", maxVal);
console.log("");

// ---------- Bonus Task 7: Transform Names Using map (to uppercase) ----------
let names = ["ram","shyam","mohan"];

let upperNames = names.map(name => name.toUpperCase());

console.log("Bonus Task 7: Transform Names");
console.log("Input:", names);
console.log("Output:", upperNames);
console.log("");

// ---------- End ----------
console.log("All tasks completed.");
