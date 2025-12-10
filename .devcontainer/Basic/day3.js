/* function Run(n){
    return n*2;
}
let ch= Run(23);
console.log(ch);


let arr=[1,2,3,4,"ab","abc","abcd",ch];
console.log(arr);

*/

/* let fruit= ["apple","banana","kela","seb","santra"];
for(let temp of fruit){
console.log(temp);
}
fruit.push("papaya")
console.log(fruit);
fruit.unshit("kiwi")
console.log(fruit);
fruit.pop();
console.log(fruit);
fruit.includes("seb");
console.log(fruit);
fruit.indexOf("banana")
console.log(fruit); */

/*
const numbers1 = [2, 4, 6, 8];
const doubled = numbers1.map(num => num * 2);

console.log(doubled); 



const numbers2 = [10, 20, 40, 50, 30];


const result = numbers2.filter(num => num > 20);

console.log(result); 



const numbers = [10, 20, 40, 50, 30];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum); 
 */


// ---------- Task 9: Create student object & print properties ----------
let student = {
    name: "Vaibhav",
    age: 20,
    course: "JavaScript"
};

console.log("Task 9: Student Object");
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Course:", student.course);
console.log("");

// ---------- Task 10: Add new property 'city' ----------
student.city = "Delhi";

console.log("Task 10: After Adding City");
console.log(student);
console.log("");

// ---------- Task 11: Remove 'age' property using delete ----------
delete student.age;

console.log("Task 11: After Removing Age");
console.log(student);
console.log("");

// ---------- Task 12: Loop object using for…in ----------
console.log("Task 12: Looping Object (key-value pairs)");
for (let key in student) {
    console.log(key + ":", student[key]);
}



// Task: Create person object with nested address
let person = {
    name: "Aman",
    age: 22,
    address: {
        city: "Delhi",
        country: "India"
    }
};

// Print city
console.log("City:", person.address.city);

// Change city to "Mumbai"
person.address.city = "Mumbai";

// Print updated city
console.log("Updated City:", person.address.city);




// Task 15: Convert an object into JSON string
let product = {
    name: "Mobile",
    price: 15000,
    brand: "Samsung"
};

let jsonString = JSON.stringify(product);
console.log("JSON String:", jsonString);

// Task 16: Convert JSON string back to object
let convertedObject = JSON.parse(jsonString);
console.log("Converted Object:", convertedObject);
