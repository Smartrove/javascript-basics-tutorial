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

//type conversion

//string to number
// const ade = 'I am Ade';
// const convertedAde = Number(ade);
// console.log(typeof convertedAde)

//number to string
// const number = 7;
// const convertedNumber = String(number);
// console.log(typeof convertedNumber)

//string to boolean
// const name = 'Aishah'
// const convertedName = Boolean(name)
// console.log(typeof convertedName)

//dates 
// const date = new Date()
// const convertedDate = date.toString()
// console.log(convertedDate)
// const time = date.getTime()
// const convertedTime = String(time)
// console.log(date, time, convertedTime)


//type coercion
// const number = 2;
// const name = 'Aishah'
// const description = number + name;

// console.log(typeof description)


//if else statements
// const age = 15;
// const convertedAge = String(age);
// const number = prompt('Enter Your age') 
// if(number < convertedAge){
//     alert('you are too young for this')
// }  
// else if(number > convertedAge) {
//     alert("You are too old for this")
// } 
// else if(number === convertedAge){
//     alert('You are cool 🌹')
// }

//string method


//length method
// const name = 'Aishah';
// const nameLength = name.length
// console.log(nameLength)

//slice method
// const occupation  = 'student';
// const occupationSlice = occupation.slice(3, 7)
// console.log(occupationSlice)

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12, -6);

// console.log(part)


//substring method
// const occupation  = 'student';
//  const occupationSubstring = occupation.substring(3, 7)
//  console.log(occupationSubstring)

//substr method
// const name = "Aishah"
// console.log(name.substr(0, 4))

//replace method

// const name = "Aishah"
// console.log(name.replace(/h/g, "Mogaji"))


//replace all method

// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// text = text.replaceAll("Cats","Dogs");
// text = text.replaceAll("cats","dogs");

// console.log(text)

//to lower and upper case methods

// const name = 'aishah';
// const nameUpperCase = name.toUpperCase();
// console.log(nameUpperCase)

// const nameLowerCase = nameUpperCase.toLowerCase();
// console.log(nameLowerCase)

//concat method
// const a = 'ade'
// const b = 'shola'
// console.log(a.concat('', b))

//trim method
// let greeting = "      Hello World!      ";
// let greetingTrimmed = greeting.trim();
// console.log(greetingTrimmed)
// console.log(greeting)

//charat method
// let text = "HELLO WORLD";
// let char = text.charAt(4);
// console.log(char)

//split method
// const fruit = ['apple', 'orange',]
// const fruits = 'apple, orange'
// const fruitsArr = fruits.split(' ')
// console.log(fruitsArr)


//switch statement
// const age = 5;

// switch (age) {
//   case 35:
//     console.log("You are now an adult");
//     break;

//   case 56:
//     console.log("You are a grandpa");
//     break;

//   default:
//     console.log("Grow up dear");
// }

//ternary operator
// const age = 15;
// age >= 18 && age < 75
//   ? console.log("can obtain a driver license")
//   : age >= 75
//   ? console.log("too old to obtain a driver license")
//   : console.log("cannot obtain a driver license");

//array and array methods
// const fruits = ["apple", "orange", "watermelon", "banana"];
// console.log(fruits.length)

// console.log(fruits[fruits.length - 1])
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[3]);


//replace an element of an array
// fruits[3] = 'mango'
// const fruitsString = fruits.toString()
// // console.log(typeof fruitsConverted)

// const fruitsArray = fruitsString.split(' ')
// console.log(fruitsArray)

// const fruits = [2, 4, 7, 9, 23];

// for(let i = 0; i < fruits.length; i++){
//     const element = fruits[i] * 2
//     console.log(element)
// }

//1. given an array with elements, return  the  largest element in the array using javascript function;

//Test data: const arrayNumber = [20, 21, 18, 15, 10, 9, 8, 7, 45]

// function getLargestElement() {
//   const arrayNumber = [20, 21, 18, 15, 10, 9, 8, 7, 45];
//   let largestElement = arrayNumber[0];
//   for (let i = 0; i < arrayNumber.length; i++) {
//     // console.log(arrayNumber[i]);
//     if (arrayNumber[i] > largestElement) {
//       largestElement = arrayNumber[i];
//     }
//   }
//   console.log(largestElement);
// }

// getLargestElement();

//2. using javascript function, write a program that returns the multiples of 3 and 5 between 0 and 100;

// function getThreeMultiples() {
//   for (let i = 0; i < 100; i++) {
//     // console.log(i);
//     if (i % 3 === 0) {
//       console.log(i);
//     }
//   }
// }

// getThreeMultiples();

// function getFiveMultiples() {
//   for (let i = 0; i < 100; i++) {
//     if (i % 5 === 0) {
//       console.log(i);
//     }
//   }
// }

// getFiveMultiples();


//array methods continuation
//join method
// const foodString = food.join(',');
// console.log(foodString)

//pop method
// food.pop() // amala, semo, fufu
// food.push('pounded-yam') // amala, semo, fufu, pounded-yam
// food.shift()  // 'semo', 'fufu', 'pounded-yam'
// food.unshift('cold-pap')
// const rice = ['white-rice', 'black-rice', 'jollof-rice']
// const foods = food.concat(rice) // 'cold-pap','semo','fufu','pounded-yam','white-rice','black-rice','jollof-rice'.


// continuation on array methods
//splice method
// const food = ['amala', 'semo', 'fufu', 'wheat']
// food.splice(2, 0, "pounded-yam", "eba")
// food.splice(2, 1, "pounded-yam", "eba")
// food.splice(0, 1)



//slice method
// const food = ['amala', 'semo', 'fufu', 'wheat']
// const sliceFood = food.slice(3)
// console.log(sliceFood)

//sorting method
// const number = [9, 5, 7, 2, 4, 1, 6, 10, 21]
// const sortedNumber = number.sort()
// console.log(sortedNumber)

//template literal or template string
// const firstName = 'Aishah'
// const lastName = "Mogaji"
// const age = '20'
// const occupation = 'Web Developer'
// const placeOfBirth = 'Abeokuta'

// const personalInfo = `I am ${firstName} ${lastName}. I am ${age } years old. I am a ${occupation}. I was born in ${placeOfBirth}.`

// console.log(personalInfo)


//javascript function
// const x = 2; //global variable
// function loopOfNumbers(){
//     // const y = 2; //local variable
//     // console.log(x + y);
//     // const number = [1, 3,5,7,9,2, 4, 6, 8]
//     // for(let i = 0; i < number.length; i++){
//     //     console.log(number[i]);
//     // }
// }

// // console.log(x)
// loopOfNumbers()

//arrow function
// const loopOfNumbers = () =>{
//     const fruits = ['apple', 'orange', 'pawpaw']
//     fruits.push('pineapple')
//     console.log(fruits)
// }

// loopOfNumbers()

//callback function
// function sortNumbers(){
// const number = [1, 3,5,7,9,2, 4, 6, 8, 10, 21, 23]
// const numberSorted = number.sort(function(aishah, mogaji){
//     return mogaji - aishah
// });
// console.log(numberSorted)
// }

// sortNumbers()

// const numberFunction = (a,b) =>{
//     console.log(a * b)
// }

// numberFunction(2,2) //argument



// const number = [1,2,3,4,5]

// for (let i = 0; i < number.length; i++) {
// const element = number[i]
// // console.log(element)
// const newNumber = element * 2
// console.log(newNumber)
// }

// const text = 'paranoid'
// const splitText = text.split('')
// const textSorted = splitText.sort()
// const textSortedString = textSorted.join('')
// console.log(textSortedString)

//function expression

// const numberLoop = function (){
// return 2 * 2;
// }

// console.log(numberLoop())

// let y = [1,2,3]
// const numberLoop = function(){
//     for(let iterator = 0; iterator < y.length; iterator++){
//         // console.log(y[iterator])
//         const multiply = y[iterator] * 7
//         console.log(multiply)
//     }
// }

// numberLoop()


// const a = function (x, b) {
//     return b * x
// }


// const b = function(m, y){
//     const c = a(m, y)
//     return c * 2
// }

// console.log(b(2,3))


//the while loop
// let a = 1;
// while (a <= 10){

//    console.log( a * 2)
//     a++;
// }

// const text = 'paranoid';

// Convert the string to an array of characters
// const charArray = text.split('');
// console.log(charArray)

// // Sort the array in alphabetical order
// charArray.sort();

// // Join the sorted array back into a string
// const sortedText = charArray.join('');

// console.log(sortedText); // Output: 'aadinopr'

//more on looping

//for loop
// for(let i = 0; i < 100; i++) {
//     if(i % 2){
//         console.log(`I love ${i}`)
//     }
// }
// for(let i = 0; i < 10; i++) {
//     console.log(i)
//     if(i === 5){
//         console.log(`I love ${i}`)
//         break
//     }
// }

//the while loop
// let i = 0;
// while(i < 10){
//     if(i === 5){
//         console.log(`this is cool ${i}`)

//     }
//     i++;
// }

//the do while loop
// let i = 0;
// do{
//     if(i === 4){
//         console.log(`this is cool ${i}`)
//     }

//     i++;
// }

// while(i < 10)

//for each loop

// const fruits = ['apple', 'orange', 'papaya']
// fruits.forEach((fruit)=>{
//     console.log(`2 ${fruit}`)
// })

//mapping method
//  const fruits = ['apple', 'orange', 'papaya']
//  const mappedFruits = fruits.map((fruit)=> {
//     return fruit;
//  })

//  console.log(mappedFruits)

//object
// const person = {
//     firstName : 'Mogaji',
//     lastName : 'Aishah',
//     age: 20,
//     hobbies: ['football', 'eating', 'talking', 'sleeping'],
//     getBirthYear : function() {
//         return 2023 - this.age;
//     }
// }

// //dot notation
// //bracket notation

// // console.log(person.firstName)
// // console.log(person.lastName)
// // console.log(`I am ${person.firstName} ${person.lastName}`)
// console.log(person['firstName'])
// console.log(`i am ${person['lastName']} ${person['firstName']}`)

// console.log(person.hobbies[0])
// console.log(person.getBirthYear())

// const data = [
//     {id: 1, name : 'apple'}, 
// {id: 2, name : 'mango'},
// {id: 3, name : 'papaya'}
// ]

// const mappedData = data.map((item)=> {
// return item.name
// })


// console.log(mappedData)

//for in loop
// const person = {
//     firstName : 'Mogaji',
//     lastName : 'Aishah',
//     age: 20,
//     hobbies: ['football', 'eating', 'talking', 'sleeping'],
//     getBirthYear : function() {
//         return 2023 - this.age;
//     }
// }

// for(x in person){
//     console.log(person[x])
// }

//destructing 
// const number = [2,3,4]
// // const a = number[0]
// // const b = number[1]
// const [a,b,c] = number;
// console.log(b)

// const nested = [2,4, [5,6]]
// const [i,m, [j,k] ] = nested;
// console.log(j, k, i, m)

// const day = {
// monday:{
//     open: 9,
//     close: 9
// },
// tuesday: {
//     open: 10,
//     close: 8
// },
// wednesday:{
//     open: 11,
//     close: 12
// }
// }

// const {monday, tuesday, wednesday} = day;
// console.log(monday, tuesday, wednesday)

//spread operator
// const array = [7, 8, 9]
// const oldArr = [2,3,4, ...array];
// console.log(...oldArr)

// console.log(window)
// window.alert("Aishah is a lazy girl")

// let value;
// value = window.innerWidth
// value= window.innerHeight
// value = window.location.href
// value = window.location.pathname

// // window.location.href = 'https://www.google.com'
// // value = window.location.reload()
// value = window.history
// value = window.navigator
// value = window.navigator.appName
// console.log(value);

//DOM (Document Object Model)

// console.log(document)
// let value;
// value = document;
// value = document.all
// value = document.all.length
// value = document.forms
// value = document.forms[0].id
// value = document.forms[0].method



// //document links
// value = document.links
// value = document.images
// console.log(value)

//selector
//getElementById
// console.log(document.getElementById('task-title'))
// console.log(document.getElementById('task-title').id)
// console.log(document.getElementById('task-title').className)

// const taskHeading = document.getElementById('task-title')

// // document.getElementById('task-title').style.background = '#ccc'
// // document.getElementById('task-title').textContent = 'Task Title'
// // document.getElementById('task-title').innerHTML = '<span>Hello DOM</span>'
// // document.getElementById('task-title').style.display = 'none'

// taskHeading.style.background = 'red'
// taskHeading.style.color = '#fff'

//query selector
// const taskHeading = document.querySelector('#task-title');
// taskHeading.style.background = 'teal'
// taskHeading.style.color = '#fff'

// const name = document.querySelector('li:nth-child(even)');

// name.textContent = 'Hello World'

//getElementByClassName

// let items = document.getElementsByClassName('item');
// let itemsData = [...items];

// itemsData.forEach((item, index)=>{
//     // console.log(item)
//     item.textContent = `${index}: Hello JavaScript`
//     item.reverse()

// })

// const items = document.querySelectorAll('ul.task-collection li.item');
// const itemsData = [...items]
// console.log(itemsData)

// document.querySelector('.item').addEventListener('click', function(){
// window.alert('Hello JavaScript item one')
// })
// document.querySelector('.item2').addEventListener('click', function(){
// window.alert('Hello JavaScript item two')
// })

// document.querySelector('.item2').addEventListener('click', onClick)

// function onClick(e) {
//     let value;
//     value = e;
//     // console.log(e.target.value)
//     e.target.innerText = "Hello"
// }

document.querySelector('.clear').addEventListener('click', checkEvent)

function checkEvent(e){
    alert(`Event type: ${e.type}`)
}




