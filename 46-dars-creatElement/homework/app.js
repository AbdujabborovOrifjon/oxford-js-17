let body = document.querySelector("body")
body.style.backgroundColor = "black";
// body.style.display = "flex";
// body.style.justifyContent = "center";
// body.style.alignItems = "center";
// body.style.height = "100vh";  

let = cont = document.createElement("div")
cont.style.cssText = `
 width:1200px;
 height:709px;
 border:1px solid white;
margin: 0 auto;
`
body.appendChild(cont)

let h1 = document.createElement("h1")
h1.textContent = "RESPONSIVE CARD DESIGN"
h1.style.cssText = `
color: white;
font-size: 70px;
font-family: sans-serif;
background-Color: pink;
text-align: center;
`
cont.appendChild(h1)