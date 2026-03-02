document.addEventListener("DOMContentLoaded", function () {
    let text = document.querySelector(".text")

text.hasAttribute("title")
text.getAttribute("title")
text.setAttribute("style", "color:blue")
text.removeAttribute("title")
console.log(text);


})


let box = document.querySelector(".box")
box.setAttribute("style", `border: "2px solid blue";  width: "200px"; height: "100px"`)
box.innerHTML = `<img width="200px" height="100px" src="./1695442651_2-33.jpg" alt="">`