// ----------------------------------------------------
// 1. Sum of two numbers
// ----------------------------------------------------
let a = 10, b = 20;
console.log("1. Sum =", a + b);


// ----------------------------------------------------
// 2. Print "Hello <name>"
// ----------------------------------------------------
let name = "Vaibhav";
console.log("2. Hello " + name);


// ----------------------------------------------------
// 3. Even / Odd check
// ----------------------------------------------------
let num = 7;
console.log("3.", num % 2 === 0 ? "Even" : "Odd");


// ----------------------------------------------------
// 4. Celsius → Fahrenheit
// ----------------------------------------------------
let celsius = 30;
let fahrenheit = (celsius * 9/5) + 32;
console.log("4. Fahrenheit =", fahrenheit);


// ----------------------------------------------------
// 5. Max among 3 numbers (NO built-in functions)
// ----------------------------------------------------
let x = 12, y = 25, z = 8;
let max3 = x;

if (y > max3) max3 = y;
if (z > max3) max3 = z;

console.log("5. Max among 3 =", max3);


// ----------------------------------------------------
// 6. Find string length (NO .length usage for logic)
// ----------------------------------------------------
let str = "JavaScript";
let len = 0;
for (let _ of str) len++;
console.log("6. String length =", len);


// ----------------------------------------------------
// 7. Toggle boolean
// ----------------------------------------------------
let flag = true;
flag = !flag;
console.log("7. Toggled value =", flag);


// ----------------------------------------------------
// 8. Concatenate strings
// ----------------------------------------------------
let str1 = "Hello";
let str2 = "World";
console.log("8. Concatenated =", str1 + " " + str2);


// ----------------------------------------------------
// 9. Positive / Negative / Zero
// ----------------------------------------------------
let n = -5;
if (n > 0) console.log("9. Positive");
else if (n < 0) console.log("9. Negative");
else console.log("9. Zero");


// ----------------------------------------------------
// 10. var / let / const example
// ----------------------------------------------------
var v = 10;
let l = 20;
const c = 30;

v = 50;
l = 60;
console.log("10. var =", v, "let =", l, "const =", c);


// ----------------------------------------------------
// 11. Multiplication table
// ----------------------------------------------------
let tableNum = 5;
console.log("11. Table of 5:");
for (let i = 1; i <= 10; i++) {
    console.log(tableNum, "x", i, "=", tableNum * i);
}


// ----------------------------------------------------
// 12. Sum of first 10 natural numbers
// ----------------------------------------------------
let sum = 0;
for (let i = 1; i <= 10; i++) sum += i;
console.log("12. Sum of first 10 =", sum);


// ----------------------------------------------------
// 13. Switch-case → day name
// ----------------------------------------------------
let day = 3;
switch (day) {
    case 1: console.log("13. Monday"); break;
    case 2: console.log("13. Tuesday"); break;
    case 3: console.log("13. Wednesday"); break;
    case 4: console.log("13. Thursday"); break;
    case 5: console.log("13. Friday"); break;
    case 6: console.log("13. Saturday"); break;
    case 7: console.log("13. Sunday"); break;
    default: console.log("13. Invalid");
}


// ----------------------------------------------------
// 14. Function → Factorial
// ----------------------------------------------------
function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) fact *= i;
    return fact;
}
console.log("14. Factorial of 5 =", factorial(5));


// ----------------------------------------------------
// 15. Voting eligibility
// ----------------------------------------------------
function canVote(age) {
    return age >= 18 ? "Eligible" : "Not eligible";
}
console.log("15. Vote check (20) →", canVote(20));


// ----------------------------------------------------
// 16. Prime number check
// ----------------------------------------------------
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log("16. Is 17 prime? →", isPrime(17));


// ----------------------------------------------------
// 17. Sum of digits
// ----------------------------------------------------
let number = 123;
let digitSum = 0;
let temp = number;

while (temp > 0) {
    digitSum += temp % 10;
    temp = parseInt(temp / 10);
}
console.log("17. Sum of digit (123) →", digitSum);


// ----------------------------------------------------
// 18. Reverse string manually (NO reverse())
// ----------------------------------------------------
function reverseString(s) {
    let rev = "";
    for (let i = s.length - 1; i >= 0; i--) {
        rev += s[i];
    }
    return rev;
}
console.log("18. Reverse 'hello' →", reverseString("hello"));


// ----------------------------------------------------
// 19. Grade check
// ----------------------------------------------------
let marks = 82;
let grade;

if (marks >= 90) grade = "A";
else if (marks >= 75) grade = "B";
else if (marks >= 50) grade = "C";
else grade = "Fail";

console.log("19. Grade =", grade);


// ----------------------------------------------------
// 20. Basic Calculator (+, -, *, /)
// ----------------------------------------------------
function calculate(a, b, op) {
    if (op === '+') return a + b;
    if (op === '-') return a - b;
    if (op === '*') return a * b;
    if (op === '/') return b !== 0 ? a / b : "Error";
    return "Invalid";
}
console.log("20. 10 * 5 =", calculate(10, 5, '*'));


// ----------------------------------------------------
// 21. Count vowels manually
// ----------------------------------------------------
function countVowels(s) {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let ch of s) {
        for (let v of vowels) {
            if (ch === v) {
                count++;
                break;
            }
        }
    }
    return count;
}
console.log("21. Vowels in 'beautiful' =", countVowels("beautiful"));


// ----------------------------------------------------
// 22. Fibonacci series
// ----------------------------------------------------
console.log("22. Fibonacci (7 terms):");
let f1 = 0, f2 = 1;
for (let i = 1; i <= 7; i++) {
    console.log(f1);
    let next = f1 + f2;
    f1 = f2;
    f2 = next;
}


// ----------------------------------------------------
// 23. Min & Max from array (NO Math.min/max, NO sort)
// ----------------------------------------------------
function getMinMax(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }
    return { min, max };
}
console.log("23. Min & Max =", getMinMax([5, 2, 9, 1, 7]));


// ----------------------------------------------------
// 24. Simple Menu Program (Switch)
// ----------------------------------------------------
let choice = 3;
let A = 10, B = 4;

switch (choice) {
    case 1: console.log("24. Add =", A + B); break;
    case 2: console.log("24. Sub =", A - B); break;
    case 3: console.log("24. Mul =", A * B); break;
    case 4: console.log("24. Div =", A / B); break;
    default: console.log("24. Invalid");
}


// ----------------------------------------------------
// 25. Armstrong Number
// ----------------------------------------------------
function isArmstrong(num) {
    let temp = num;
    let count = 0;

    // Count digits manually
    let temp2 = num;
    while (temp2 > 0) {
        temp2 = parseInt(temp2 / 10);
        count++;
    }

    // Calculate sum
    let sum = 0;
    while (temp > 0) {
        let digit = temp % 10;

        // power(digit, count) without Math.pow
        let power = 1;
        for (let i = 1; i <= count; i++) power *= digit;

        sum += power;
        temp = parseInt(temp / 10);
    }

    return sum === num;
}
console.log("25. Is 153 Armstrong? →", isArmstrong(153));
