// Selectors

// 1. getElementByID
const title = document.getElementById("title")
console.log(title)
//2. getElementsByClassname
const para = document.getElementsByClassName("msg")
console.log(para)
// 3. getElemetByTagName
const listItem = document.getElementsByTagName("li")
console.log(listItem)
// 4. querySelector
const firstPera = document.querySelector(".msg")
const thirdPera = document.querySelector(".msg2")
console.log(firstPera)
console.log(thirdPera)
// 5. querySelectorAll
const allPara = document.querySelectorAll(".msg")
console.log(allPara)


// Modifying Value
title.textContent = "DOM Manipulation Modified"
firstPera.innerHTML = "<i>This is a changed text using DOM</i>"
//firstPera.innerText = "This is a changed text using DOM"

// Modify CSS
title.style.color = "red"
title.style.fontSize = "20px"
// firstPera.style.font = "bold"; 
firstPera.style.backgroundColor = "lightgray"

// Modifying Attribute
const input = document.getElementById("nameInput")
// change the attribute placeholder
 input.setAttribute("placeholder","Enter your first name")
// get the attribute
console.log(input.getAttribute("placeholder"))

// remove attribute
// input.removeAttribute("placeholder")

// Toggle New Classes 
thirdPera.classList.add("highlight")
thirdPera.classList.remove("highlight")
firstPera.classList.toggle("highlight")

// Creating a new Element
const newListItem = document.createElement("li")

// Add Text into new Li Tag
newListItem.textContent = "Orange"

// Append new li Tag on HTML
document.getElementById("itemList").appendChild(newListItem)

// Remove Element from UL Tag
const ul = document.getElementById("itemList")
ul.lastElementChild.remove()

// Insert Item in list
const firstEle = ul.firstElementChild
const newFr = document.createElement("li")
newFr.textContent = "Orange"
ul.insertBefore(newFr, firstEle)

// DOM Traversing (Parent/ Child/ Sibling)
console.log(ul.parentElement) // body will be the parent
console.log(ul.children)
console.log(ul.firstElementChild)
console.log(ul.lastElementChild)
console.log(ul.firstElementChild.nextElementSibling)
console.log(ul.firstElementChild.previousElementSibling)


// Event Handling
const btn = document.getElementById("btn")

// method 1: onClick() (onClick)
// btn.onclick = function (){
// alert("Button clicked using onclick()")
// }

// method 2: addEventListener
btn.addEventListener("click", ()=>{
    alert("Button clicked using addEventListener()")
})

// Mouse and Keyboard Event listner
btn.addEventListener("mouseover",()=>{
    title.style.color = "blue"
})
btn.addEventListener("mouseout",()=>{
    title.style.color = "red"
})

// Keyboard input
input.addEventListener("keyup", (event)=>{
    console.log("User Typing...", event.target.value)
})

// Form Handling
document.getElementById("myForm").addEventListener("submit",(e)=>{
e.preventDefault()
    const username = document.getElementById("username").value
    console.log("Submitted Value: ", username)
})