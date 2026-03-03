// const { createElement } = require("react")

// let box = document.createElement("div")
// box.style.width = "500px"
// box.style.height = "500px"
// box.style.border = "2px solid red"

// let body = document.querySelector("body")
// body.appendChild(box)

// let h1 = document.createElement("h1")
// h1.textContent = "oxford"
// box.append(h1)
// h1.style.textAlign = "center"
// h1.style.color = "blue"
// h1.style.fontSize = "50px"


// let box2 = document.createElement("div")
// box.append(box2)
// box2.style.width = "200px"
// box2.style.height = "200px"
// box2.style.border = "2px solid blue"

// let box3 = createElement("div")
let body = document.querySelector("body")

let box = document.createElement("div")
box.style.width="500px"
box.style.height="500px"
box.style.border="3px solid red"
body.append(box)
let h1 = document.createElement("h1")
h1.textContent = "oxford"
console.log(h1);
box.appendChild(h1)