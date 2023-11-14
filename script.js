console.log("Hello world !")

const button = document.querySelector(".button")

button.addEventListener("mousedown", (event) => {
    button.classList.add("button-pressed-down") 

})

function sayHello() {
    alert("Hello There !")
    button.classList.remove("button-pressed-down")
}