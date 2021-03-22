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

const main = document.querySelector("main");
const button = document.querySelector("button");

button.addEventListener("click", fooButton) 
    function fooButton() {
        const h3 = document.createElement ('h3');
        h3.textContent = "Foo"; 
        main.appendChild(h3); 
    }

    button.addEventListener("click", function () {
        const h3 = document.createElement ("h3");
        h3.textContent = "Bar"; 
        body.appendChild(h3);
     })
    


    button.addEventListener("click", function (event) {
        const h2 = document.createElement("h2");
        h2.textContent = "FooBar";
        body.appendChild(h2);
    }) 