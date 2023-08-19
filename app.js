// console.log("Hello world");

// console.log("Aishah is beautiful");

//variables and values
//Variables are Containers for Storing Data or Values.
//declaration of variables, we have var, let, const...

// var aishah = 2; // data is the same as value;

// aishah = 3; 

// aishah = "Aishah"
// console.log(aishah)

// let a = 4 + 5;
// let x = 8;
// console.log(a  * x)


// const y =  5 ** 2; // 5 * 5
// console.log(y);


//rules for variables declaration
// 1. a variable must not begin with capital letter
// 2. you can begin a variable with underscore (_).// e.g let _x = 123
// 3. you can begin a variable with dollar sign ($). // e.g var $w = 123
//4. joined words can be in camel case, pascal case and snake case
//camel case
// const ageAishah = 89;

//pascal case
// const AgeAishah = 89; // dont use this in JS

// snake case
// const age_aishah = 89;

//data types
// two types of data
// primitive data types and non-primitive data types
//primitive data types


// -string
// const name = "Shade"
// console.log(typeof name)

// let stringNumber = "2"
// console.log(typeof stringNumber)

// -number 

// let x = 1;
// console.log(typeof x)
 
// let y = 9000;
// console.log(typeof y)

// - boolean
// const isLoading = false;
// console.log(typeof isLoading)

// - undefined
// let x;
// console.log(typeof x)

//null
// const number = null;
// console.log(number)

// bigInt
// let x = BigInt("123456789012345678901234567890");
// console.log(typeof x)

//empty 

// const y = ""

//non-primitive data types
// array
// const fruits = ['apple', 'orange', 'pineaple', 'pawpaw']
// console.log(typeof fruits)
// object

// const student = {
//     name: 'Mogaji Aishah',
//     occupation: 'Web Developer',
//     age: '80years old',
//     address:'Abeokuta'
// }


// console.log(student)

//JavaScript Operators
//arithmetic operators
//assignment operators
//logical operators
// comparison operators

//arithmetic operators
// const a = 2;
// const b = 5;
// const c = a + b;
// const y = a-b;
// const x = a * y;
// const p = c / b;
// const q = a ** b; // 2 x 2 x 2 x 2 x 2
// console.log(q)

// assignment operators

// var a = "b";
// var x = 5;
//     x += 10 // x = x + 10
//     x -= 6; // x = x - 6
//     x *= 2; // x = x * 2
//     x++; // x = x + 1
//     x--; // x = x - 1
// console.log(x)

//comparison operators
// const x = 30;
// const y = 13;
// console.log(x <= y)
// console.log(x >= y)

// console.log(x == y)
// == and ===

// const x = 13;
// const y = "13";
// // console.log(x == y)
// console.log(x === y)

// !=
// const a = 5
// const b = '5'
// console.log(a !== b)

//logical operators
// const a = 10;
// const isLoading = true;
// if(a && isLoading) {
//     console.log('I love coding')
// } else{
//     console.log('I hate coding')
// }

// if(a && isLoading === false) {
//     console.log('I love coding')
// } else{
//     console.log('I hate coding')
// }

// const isAged = false;
// const canDrive = false;

// if(isAged || canDrive) {
//     console.log('Apply for a driver license')
// } else{
//     console.log('do not apply for a driver license')
// }