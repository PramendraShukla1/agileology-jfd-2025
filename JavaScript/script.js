// var a = 10
// console.log("old value "+a)

// var a = 20
// console.log("new value "+ a)

// Global Scope Variable



// Block Scope Variable
// function cube(){
//     var innerFuncVar = 20;
// }
// innerFuncVar= 30;
// console.log(innerFuncVar)

// let b = 20;

// console.log(b)


// const c = 20;
// console.log("old c value "+c)
// c = 30
// console.log("new c value "+c)


//Numeric Data Types
// Number
// var a = 10
// console.log(typeof(a))

// var name = "Pramendra"
// console.log(typeof(name))

// var Condit = true
// console.log(typeof(Condit))

// let notAssign;
// console.log(typeof(notAssign))

// let noValue = null
// console.log(typeof(noValue))

// let bigint = 123456789902837465n
// console.log(typeof(bigint))

// let phone = {
// model : "iphone",
// DOM : 2020,
// color: "Black"
// }
// console.log(typeof(phone))

// let color = ["red","green","blue"]
// console.log(color[0])

// function add (n, m){
// console.log(n+m)
// }

// add(2,2)



// Javascript Arithmetic Operators
// const a = 10
// const b = 20
// const sum = a + b //add
// const sub = b - a // sub
// const multi = a * b //mul
// const div = b/a //div

// console.log(sum)
// console.log(sub)
// console.log(multi)
// console.log(div)


// Assignment Operator

// let a = 20
// a += 5
// console.log(a)
// a -= 10
// console.log(a)
// a *= 3
// console.log(a)
// a /= 2
// console.log(a)

// Comparison Operators

// let a = 10
// let b = 20

// console.log(a > b)
// console.log(a<b)
// console.log(a==b)
// console.log(a>=b)
// console.log(a<=b)
// console.log(a !== b)


// Logical Operators 
// let a = 20
// let b = 40
// let c = 40
// console.log(a > b || b==a)
// console.log(a < b && c > a)

// Control Statement
// 1. If, else, switch and elseif
// 2. loops

// age = 16
// if(age>=18){
//     console.log("person is allowed to vote")
// }else{
//     console.log("person is not allowed to vote")
// }

// day = "Sunday"

// switch(day){
//     case "MONDAY":
//         console.log("today is monday!")
//         break
//          case "TUESDAY":
//         console.log("today is tuesday!")
//         break
//          case "WEDNESSDAY":
//         console.log("today is wednessday!")
//         break
//         default:
//             console.log("value is invalid")
// }

// Ternary Operator
// let age = 16
// let result = age >= 18 ? "Can Vote" : "Cannot Vote"
// console.log(result)

// For Loop
// for(let i = 1 ; i<=10; i++){
//     console.log("2 X "+i+" = "+2*i)
// }

//While loop
// let a = 5
// while(a <= 10){
//     console.log(a)
//     a++;
// }

// Do While loop
// let a = 1;
// do{
//     console.log(a)
//     a++
// } while (a <= 0)

// String

// let b = "MY HOME SWEET HOME"
// // Slice Method
// console.log(a.slice(0,5))

// // Substring Method
// console.log(a.substring(6,13))

// // Substr Method
// console.log(a.substr(6, 13))

// // Replace Method
// let change = a.replace("home","shop")
// console.log(change)

// // Replace All
// let change2 = a.replaceAll("home","shop")
// console.log(change2)

// // Uppercase
// console.log(a.toUpperCase())

// // lowercase
// console.log(a.toLowerCase())

// // concatination
// console.log(a.concat(b))


// Before Trimming
// console.log(a.length)
// Trimming
// let newString = a.trim()
//After Trimming
// console.log(newString.length)
// console.log(newString)

// Trim Start
// Before Trimming
// console.log(a.length)
// Trimming
// let newString = a.trimStart()
//After Trimming
// console.log(newString.length)
// console.log(newString)

// Trim End
// Before Trimming
// console.log(a.length)
// Trimming
// let newString = a.trimEnd()
//After Trimming
// console.log(newString.length)
// console.log(newString)

// CharAt
// let a = "HELLO WELCOME TO MY HOME!"
// console.log(a.charAt(0))


// let a = "apple-mango-papaya"
// console.log(typeof(a))
// let b = a.split('-')
// console.log(typeof(b))

//Array

// empty array
// let a = []

// array fruits
// let b = ["apple","papaya","pineapple"]
// let a = ["suresh","rajesh"]
//access first element
// console.log(b[0])

//access last element
// console.log(b[b.length - 1])

// modify array
// console.log(b)
// b[b.length - 1] = "Orange"
// console.log(b)

// length
// console.log(b.length)

// toString()

// let a = b.toString()
// console.log(typeof(a))

// join
// console.log(b.join("|"))

// concat method
// let newArray = b.concat(a)
// console.log(newArray)

// flat()
// const a = [[1,2,3],[4,5,6],[7,8,9],8,[10]]
// const b = a.flat(Infinity)
// console.log(b)

// let a = ["apple","papaya","pineapple"]

// Push method
// a.push("Orange")
// console.log(a)

// unshift method
// a.unshift("Kiwi")
// console.log(a)

//pop
// a.pop()
// console.log(a)

// shift
// a.shift()
// console.log(a)

// Slice
// const arrNum = [1,2,3,4,5]
// const arr = arrNum.slice(0,3)
// console.log(arr)

// filter method

// let a = [1,2,3,4,5]
// let b = a.filter((num)=>num>2)
// console.log(b)


// reduce function

let a = [88, 50, 25, 10]
// let sub = a.reduce(dec)

// function dec (tot, num){
//     return tot - num
// }

// console.log(sub)

// reverse
// let newarr = a.reverse()
// console.log(newarr)

// Function 
// Named Function 
// function sayHi(name){
//     return ("Hi " + name)
// }
// console.log(sayHi("Pramendra"))

// // Anonymous Function
// const saySomething = function(){
//     return "Today is sunday!"
// } 
// console.log(saySomething())

// // Function Expression 

// const add = function(a, b){
//     return a + b
// }
// console.log(add(2, 5))

// // Arrow Function ES6
// const sub = (n , m) => {
//     return (m - n)
// } 

// console.log(sub(10, 20))

// // Immediatly Invoked Function Expression
// // (function (){
// //     console.log("this is a Immediatly Invoked Function Expression")
// // })() 


// console.log("Start")

// // Callback Function
// setTimeout(function(){
//     console.log("setTimeout Called!")
// },2000)
// console.log("End")

// // Async Function

// async function fetchData(){
//     return "Data Fetched"
// }
// console.log(fetchData())


// // Recursive Function
// function factorial(n){
//     if (n == 0 ) return 1;
//     return n * factorial(n - 1)
// } 
// console.log(factorial(5))

// // Nested Function
// function outerFun(a){
//     function innerFun(b){
//         return a + b
//     }
//     return innerFun
// }

// const addValue = outerFun(7)
// console.log(addValue(5))


// let obj = {
//     model : "suv",
//     milage: "12L",
//     color : "Black",
//     company: "Tata"
// }

// let newObj = new Object()
// newObj.model = "Apple"
// newObj.storage = "256GB"
// newObj.processor = "M4"

// Accessing the property
// console.log(newObj.model)
// console.log(newObj["processor"])

// Modify the property
// console.log("previous value "+newObj.model)
// newObj.model = "HP"
// console.log("latest value "+newObj.model)

//Add Property
// newObj.camera = "47MP"
// console.log(newObj)

// Remove Property
// console.log(newObj.camera)
// delete newObj.camera
// console.log(newObj.camera)

// Check any existing property
// console.log(newObj.hasOwnProperty("storage"))
// console.log(newObj.hasOwnProperty("camera"))

// Iterating through object
// console.log(newObj)
// for(let i in newObj){
//     console.log(i + ": "+ newObj[i])
// }

// OOPS Concept
// class Phone {
//     constructor(brand, model){
//         this.brand = brand
//         this.model = model
//     }

//     showInfo(){
//         console.log(`This is a ${this.brand} phone and 
//             ${this.model} model.` )
//     }
// }
//  const phone1 = new Phone("Apple","Iphone 15 Plus")
//   const phone2 = new Phone("Samsung","S24 Ultra")

//   phone1.showInfo()
//   phone2.showInfo()


  // Promise In JS
//   Pending
//   Fulfilled 
//   Rejected

// let OddEven = new Promise((resolve, reject)=>{
//     let number = 10;
//     if (number % 2 == 0 ) resolve ("The number is even!")
//         else reject("The number is odd!")
// })

// OddEven.then((message)=>console.log(message)).catch((error)=> console.log(error))

// 1. Promise.all()

// Promise.all([
//     Promise.resolve("This is resolved"),
//     Promise.resolve("This is resolved"),
//     Promise.reject("Promise is rejected")
// ]).then((result)=>console.log(result)).catch((error)=> console.log(error))

// 2. Promise.allSettled()
// Promise.allSettled([
//     Promise.resolve("This is resolved"),
//     Promise.reject("This is rejected"),
//     Promise.reject("Promise is rejected")
// ]).then((results)=> console.log(results))

// Promise.race()
// Promise.race([
//     new Promise((resolve) =>
//         setTimeout(() =>
//             resolve("Task 1 finished"), 400)),
//     new Promise((resolve) =>
//         setTimeout(() =>
//             resolve("Task 2 finished"), 500)),
// ]).then((result) =>
//     console.log(result));

// Promise.any()
// Promise.any([
//     Promise.resolve("This is resolved 1st promise"),
//      Promise.reject("This is rejected 2nd promise"),
//      Promise.resolve("Promise is resolved 3rd promise")
// ]).then((result)=> console.log(result)).catch((error)=> console.log(error))


// Promise.resolve()
// Promise.resolve("Immediate Success").then((value)=> console.log(value))

// Promise Rejected 
// Promise.reject("Promise rejected").catch((error)=> console.error(error))

Promise.resolve("Work is already completed!").then
((result)=>console.log(result)).catch((error)=>console.log(error)).finally(()=> console.log("Cleanup Completed!"))
