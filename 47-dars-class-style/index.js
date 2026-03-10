// let cont = document.querySelector(".cont")

// cont.style.cssText = `
// width: 200px;
// height: 200px;
// border: 2px solid blue;
// `

// cont.classList.add("active");


// let btn = document.querySelector(".btn")
// btn.addEventListener("click", function() {
//   cont.classList.toggle("active")
// })

// let btn2 = document.querySelector(".btn2")

// btn2.addEventListener("click", function () {
// cont.classList.replace("active", "active2")
    
// })

// console.log("hello world");

// alert("hello world")




let titles = document.querySelector(".titles")

titles.className = "title"
let title = document.querySelector(".title")

if (title) {
title.style.cssText = `
color:red;
`
}else{
    alert("malumot topilmadi")
}



let box = document.querySelector(".box")
box.style.cssText = `
width: 200px;
height: 200px;
border:2px solid blue;
margin: 50px auto;

`


// box.classList.add("active")
box.classList.remove("box")


let btn = document.querySelector(".btn")
btn.addEventListener("click", ()=>{
    box.classList.toggle("active")
})

