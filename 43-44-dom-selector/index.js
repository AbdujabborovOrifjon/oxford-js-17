document.addEventListener("DOMContentLoaded", function () {
    


// console.log(document);

// — Browser Load - bu html toliq yuklangandan keyin ishlashi uchun ishlatiladi 
// — hasAttribute - bu atribut bor yoqligini tegshiradii 
// — getAttribute - bu atributni qiymatini olish uchun ishlatiladi 

// let b = document.querySelector(".box")

// console.log(b.childNodes, "20");
// console.log(b.children[0],"21");


// let h1 = document.querySelector("h1")

// console.log(h1.parentElement);
// let c = h1.parentNode
// console.log(c.parentElement);

// console.log(h1.nextElementSibling);
// console.log(h1.nextSibling);


// Homework ====================
let box = document.querySelector(".box")
box.hasAttribute("class")
console.log(box.hasAttribute("class"));

// ==============

let pi = document.querySelector("#pi")
console.log(pi.hasAttribute("id"));

// ==================

let nav = document.querySelector("nav")
nav.setAttribute("style", "color:red")
console.log(nav, "2");

// ====================

let ul = document.getElementsByTagName("ul")[0]
ul.setAttribute("style","background-color: blue")
console.log(ul, "3");

// =======================

let li = document.getElementsByTagName("li")[0]
li.removeAttribute("title")
console.log(li, "4");

// ==========================

let a = document.getElementsByTagName("a")[0];
a.setAttribute("style", "color: yellow");
console.log(a, "5");

// =============================

let form = document.getElementsByTagName("form")[0];
form.setAttribute("style", "border: 5px solid black");
console.log(form, "6");

// ====================

// let main = document.getElementsByTagName("main")
// console.log(main, "7");

// let p = document.getElementsByTagName("p")
// console.log(p, "8");

let small = document.getElementsByTagName("small")[0]
small.setAttribute("style", "background-color: red")
console.log(small, "9");

// ================================
let h1 = document.querySelector("h1");
h1.setAttribute("style", "color: green");
console.log(h1, "10");

// ================================

let h2 = document.querySelector("h2")
h2.setAttribute("style", "color: red");
console.log(h2, "11");

// ================================

let h3 = document.querySelector("h3")
h3.setAttribute("style", "background-color: blue")
console.log(h3, "12");

// ================================

let h4 = document.querySelector("h4")
h3.setAttribute("style", "color: aqua")
console.log(h4, "13");

// ================================

let h5 = document.querySelector("h5")
console.log(h5, "14");

let h6 = document.querySelector("h6")
h6.setAttribute("style", "color: yellow")
console.log(h6, "15");

// let tr = document.querySelector(".tr")
// console.log(tr, "16");

// let td = document.querySelector(".td")
// console.log(td, "17");

let inp = document.getElementById("inp")
inp.setAttribute("style", "width:500px; height:50px")
console.log(inp, "18");


// let label = document.getElementsByTagName("label")
// console.log(label, "19");


// console.log(document, "20");

// let b = document.querySelector(".box")

// console.log(b.childNodes, "21");
// console.log(b.children[0],"22");


// let footer = document.querySelector("footer")
// console.log(footer.children, "23");


// let mk = document.getElementById("mk")

// console.log(mk, "24");

// let sp = document.getElementById("sp")
// console.log(sp, "25");


// let th = document.getElementsByTagName("th")
// console.log(th, "26");


// let time = document.getElementsByTagName("time")
// console.log(time, "27");



// let em = document.getElementsByTagName("em")
// console.log(em, "28");


let ol = document.getElementsByTagName("ol")

ol.innerHTML = `<img src="./Primary Photo Placeholder (2).png" alt="">`
console.log(ol, "29");


})