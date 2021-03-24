var foo;
var bar;
var fooBar;

const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (event) {
        console.log(event.target.value);
        
    })
}

const main = document.createElement("main");
const button = document.querySelector("button");
const uuidv5 = require('uuid/v5');

button.addEventListener("click", responseToClick) 
        function responseToClick () {
        id: uuidv4("a55ae4a3-89d1-453f-afeb-395178976be0");
        const h3 = document.createElement ("h3");
        h3.textContent = "Foo"; 
        main.appendChild(h3); 
        
    }

button.addEventListener("click", responseToClick)
        function responseToClick () {
        id: uuidv4("ccf1df3e-be75-4428-9c03-3ea7bc80bd64");
        const h3 = document.createElement ("h3");
        h3.textContent = "Bar"; 
        main.appendChild(h3);
     }
    
    button.addEventListener("click", responseToClick) 
        function responseToClick() {
        id: uuidv4("bc9843d1-60a0-421b-b7df-410ea2e132c1");
        const h2 = document.createElement("h2");
        h2.textContent = "FooBar";
        main.appendChild(h2);
    } 