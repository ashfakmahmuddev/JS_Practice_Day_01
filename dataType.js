// Data Type..!

// Primitive Data Type

const name = "Ashfak"; // String
let score = 24; // Number
let isPoor = true; // Boolean
let notDefined; // Undefined
let empty = null // Null
let bigNum = 9867641235481472 // BigInt
let id = Symbol() // Symbol

console.log(typeof name);
console.log(typeof score);
console.log(typeof isPoor);
console.log(typeof notDefined);
console.log(typeof empty); // Object
console.log(typeof bigNum); // Number
console.log(typeof id);

// Non Primitive Data Type

const ashfakDetails = {
    name : "Ashfak Mahmud",
    age : 24,
    isRich : false,
    isMarried : true,
}

console.log(ashfakDetails);
console.log(typeof ashfakDetails);


// ============================================

// ৪. ডাটা টাইপ নিয়ে খেলা (Data Type Experiment)
// একটি ভ্যারিয়েবলে সংখ্যা ১০ নিন (Number হিসেবে)।
// আরেকটি ভ্যারিয়েবলে "১০" নিন (String হিসেবে অর্থাৎ কোটেশন দিয়ে)।
// এখন এই দুইটিকে যোগ করলে কি ঘটে আর বিয়োগ করলে কি ঘটে—তা কনসোলে প্রিন্ট করে দেখুন। (এটি খুবই মজার একটি রেজাল্ট দেবে!)

let randomNumOne = 10
let randomNumTwo = "10"
let plusResult = randomNumOne + randomNumTwo
console.log(plusResult); // 1010
let minusResult = randomNumOne - randomNumTwo
console.log(minusResult); // 0
// Extra
console.log(randomNumOne == randomNumTwo); // true
console.log(randomNumOne === randomNumTwo); // false
// More
console.log( 10 + "10" ) // 1010
console.log( 10 - "10" ) // 0
console.log( 10 * "10" ) // 100
console.log( 20 / "10" ) // 2


