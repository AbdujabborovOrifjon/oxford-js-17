let cont = document.querySelector(".cont")

cont.style.cssText = `
width: 200px;
height: 200px;
border: 2px solid blue;
`

cont.classList.add("active");


let btn = document.querySelector(".btn")
btn.addEventListener("click", function() {
  cont.classList.toggle("active")
})

let btn2 = document.querySelector(".btn2")

btn2.addEventListener("click", function () {
cont.classList.replace("active", "active2")
    
})

console.log("hello world");

alert("salom")