// ----------------------------
// 1. Sum of two numbers
// ----------------------------
let a = 10, b = 20;
console.log("1. Sum =", a + b);


// ----------------------------
// 2. Print "Hello <name>"
// ----------------------------
let name = "Vaibhav";
console.log("2. Hello " + name);


// ----------------------------
// 3. Even / Odd check
// ----------------------------
let num = 7;
if (num % 2 === 0) {
    console.log("3. Even");
} else {
    console.log("3. Odd");
}


// ----------------------------
// 4. Celsius → Fahrenheit
// ----------------------------
let celsius = 30;
let fahrenheit = (celsius * 9/5) + 32;
console.log("4. Fahrenheit =", fahrenheit);


// ----------------------------
// 5. Max among 3 numbers
// ----------------------------
let x = 12, y = 25, z = 8;
let max = Math.max(x, y, z);
console.log("5. Max =", max);


// ----------------------------
// 6. Find string length
// ----------------------------
let str = "JavaScript";
console.log("6. Length =", str.length);


// ----------------------------
// 7. Toggle boolean
// ----------------------------
let flag = true;
flag = !flag;
console.log("7. Toggled value =", flag);


// ----------------------------
// 8. Concatenate strings
// ----------------------------
let str1 = "Hello";
let str2 = "World";
console.log("8. Concatenated =", str1 + " " + str2);


// ----------------------------
// 9. Positive / Negative / Zero
// ----------------------------
let n = -5;
if (n > 0) console.log("9. Positive");
else if (n < 0) console.log("9. Negative");
else console.log("9. Zero");


// ----------------------------
// 10. var / let / const example
// ----------------------------
var v = 10;     // can redeclare + reassign
let l = 20;     // cannot redeclare but can reassign
const c = 30;   // cannot redeclare, cannot reassign

v = 50;
l = 60;
// c = 70; ❌ error (const can't change)

console.log("10. var =", v, "let =", l, "const =", c);


// ----------------------------
// 11. Multiplication table
// ----------------------------
let tableNum = 5;
console.log("11. Table of 5:");
for (let i = 1; i <= 10; i++) {
    console.log(tableNum + " x " + i + " =", tableNum * i);
}


// ----------------------------
// 12. Sum of first 10 natural numbers
// ----------------------------
let sum = 0;
for (let i = 1; i <= 10; i++) sum += i;
console.log("12. Sum of first 10 numbers =", sum);


// ----------------------------
// 13. Switch-case → day name
// ----------------------------
let day = 3;
switch (day) {
    case 1: console.log("13. Monday"); break;
    case 2: console.log("13. Tuesday"); break;
    case 3: console.log("13. Wednesday"); break;
    case 4: console.log("13. Thursday"); break;
    case 5: console.log("13. Friday"); break;
    case 6: console.log("13. Saturday"); break;
    case 7: console.log("13. Sunday"); break;
    default: console.log("13. Invalid day");
}


// ----------------------------
// 14. Function → Factorial
// ----------------------------
function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}
console.log("14. Factorial of 5 =", factorial(5));


// ----------------------------
// 15. Function → Voting eligibility
// ----------------------------
function canVote(age) {
    if (age >= 18) return "Eligible to vote";
    return "Not eligible to vote";
}
console.log("15. Voting check for age 20 →", canVote(20));


// ---------------------------------------
// 16. Function → Check Prime Number
// ---------------------------------------
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log("16. Is 17 prime? →", isPrime(17));


// ---------------------------------------
// 17. Sum of digits of a number
// ---------------------------------------
let number = 123;
let digitSum = 0;
while (number > 0) {
    digitSum += number % 10;
    number = Math.floor(number / 10);
}
console.log("17. Sum of digits (123) →", digitSum);


// ---------------------------------------
// 18. Reverse string without using reverse()
// ---------------------------------------
function reverseString(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    return rev;
}
console.log("18. Reverse of 'hello' →", reverseString("hello"));


// ---------------------------------------
// 19. Grade based on marks
// ---------------------------------------
let marks = 82;
let grade;

if (marks >= 90) grade = "A";
else if (marks >= 75) grade = "B";
else if (marks >= 50) grade = "C";
else grade = "Fail";

console.log("19. Grade =", grade);


// ---------------------------------------
// 20. Calculator Function (+, -, *, /)
// ---------------------------------------
function calculate(a, b, op) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : "Cannot divide by zero";
        default: return "Invalid operator";
    }
}
console.log("20. 10 * 5 →", calculate(10, 5, '*'));


// ---------------------------------------
// 21. Count vowels in a string
// ---------------------------------------
function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let ch of str) {
        if (vowels.includes(ch)) count++;
    }
    return count;
}
console.log("21. Vowels in 'beautiful' →", countVowels("beautiful"));


// ---------------------------------------
// 22. Fibonacci series up to n terms
// ---------------------------------------
let m = 7;
let f1 = 0, f2 = 1;
console.log("22. Fibonacci series:");
for (let i = 1; i <= m; i++) {
    console.log(f1);
    let next = f1 + f2;
    f1 = f2;
    f2 = next;
}


// ---------------------------------------
// 23. Function → return min & max from array
// ---------------------------------------
function getMinMax(arr) {
    return {
        min: Math.min(...arr),
        max: Math.max(...arr)
    };
}
console.log("23. Min & Max →", getMinMax([5, 2, 9, 1, 7]));


// ---------------------------------------
// 24. Switch-case → Simple Menu Program
// ---------------------------------------
let choice = 3;
let A = 10, B = 4;

switch (choice) {
    case 1:
        console.log("24. Add =", A + B);
        break;
    case 2:
        console.log("24. Sub =", A - B);
        break;
    case 3:
        console.log("24. Mul =", A * B);
        break;
    case 4:
        console.log("24. Div =", A / B);
        break;
    default:
        console.log("24. Invalid choice");
}


// ---------------------------------------
// 25. Armstrong Number Check
// ---------------------------------------
function isArmstrong(num) {
    let sum = 0;
    let temp = num;
    let digits = num.toString().length;

    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}
console.log("25. Is 153 Armstrong? →", isArmstrong(153));
