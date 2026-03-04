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
background-Color: white;
`
body.appendChild(cont)

let h1 = document.createElement("h1")
h1.textContent = "RESPONSIVE CARD DESIGN"
h1.style.cssText = `
 width:100%;
 height:125px;
color: white;
font-size: 80px;
font-family: sans-serif;
background-color: rgba(205, 5, 85, 0.87);
text-align: center;
position: relative;
top: -54px;
line-height: 125px; 
`
cont.appendChild(h1)

let box = document.createElement("div")
box.style.cssText = `
 width:100%;
 height:457px;
 border:1px solid white;
 margin-top: -107px;
 display:flex;
 gap:50px;
 justify-content: center;
align-items: center;
`
cont.appendChild(box)


let h3 = document.createElement("h3")
h3.textContent = "USING FLEXBOX"
h3.style.cssText = `
 width:100%;
 height:125px;
color: white;
font-size: 80px;
font-family: sans-serif;
background-Color: black;
    margin-top: auto;
text-align: center;
line-height: 125px; 
`
cont.appendChild(h3)

// ======================================================

let card = document.createElement("div")
card.style.cssText = `
 width:300px;
 height:330px;
 border:1px solid black;
border-radius:10px;

`

card.innerHTML = `<img src="./49066487-idyllic-landscape-in-the-alps-with-fresh-green-meadows-and-blooming-flowers-and-snowcapped-mountain.jpg"  style="width:300px; border-radius:10px; height:172px; alt="">`

box.append(card)

let c1 = document.createElement("div")
c1.textContent = "Card 1"
c1.style.cssText = `
color: black;
font-size: 30px;
font-family: sans-serif;
font-weight :600;
padding :4px 15px;
`
card.append(c1)

let p = document.createElement("p")
p.textContent = "Lorem ipsum, dolor sit amet consectetur  elit. ver itaque tenetur temporibus quo aliquam velit nostrum obcaecati! Tenetur, eos."
p.style.cssText = `
color: black;
font-family: sans-serif;
padding:0px 15px;
position:absolute;
width:300px;
top:400px;
`
card.append(p)

let btn = document.createElement("button")
btn.textContent = "Read More"
btn.style.cssText = `
width:130px;
 height:28px;
padding:5px;
margin:75px 15px;
background-color: #000000d2;
border:none;
border-radius:5px;
color:white;
`
card.append(btn)
// ================================================================

let card2 = document.createElement("div")
card2.style.cssText = `
 width:300px;
 height:320px;
border-radius:10px;
 
 border:1px solid black;
`
box.append(card2)


card2.innerHTML = `<img src="./p0klz03j.jpg.webp"  style="width:300px; border-radius:10px; height:172px; alt="">`



let c2 = document.createElement("div")
c2.textContent = "Card 2"
c2.style.cssText = `
color: black;
font-size: 30px;
font-family: sans-serif;
font-weight :600;
padding :4px 15px;
`
card2.append(c2)

let pi = document.createElement("p")
pi.textContent = "Lorem ipsum, dolor sit amet consectetur  elit. ver itaque tenetur temporibus quo aliquam velit nostrum obcaecati! Tenetur, eos."
pi.style.cssText = `
color: black;
font-family: sans-serif;
padding:0px 15px;
position:absolute;
width:300px;
top:400px;
`
card2.append(pi)

let btn2 = document.createElement("button")
btn2.textContent = "Read More"
btn2.style.cssText = `
width:130px;
 height:28px;
padding:5px;
margin:75px 15px;
background-color: #000000d2;
border:none;
border-radius:5px;
color:white;
margin-top: 67px;
`
card2.append(btn2)


// =================================================================

let card3 = document.createElement("div")
card3.style.cssText = `
 width:300px;
 height:320px;
 border:1px solid black;
border-radius:10px;

`
box.append(card3)
   
card3.innerHTML = ` <img src="./istockphoto-486433496-612x612.jpg"  style="width:300px; border-radius:10px; height:172px; alt="">`


let c3 = document.createElement("div")
c3.textContent = "Card 3"
c3.style.cssText = `
color: black;
font-size: 30px;
font-family: sans-serif;
font-weight :600;
padding :4px 15px;
`
card3.append(c3)




let pin = document.createElement("pin")
pin.textContent = "Lorem ipsum, dolor sit amet consectetur  elit. ver itaque tenetur temporibus quo aliquam velit nostrum obcaecati! Tenetur, eos."
pin.style.cssText = `
color: black;
font-family: sans-serif;
padding:0px 15px;
position:absolute;
width:300px;
top:420px;
`
card3.append(pin)


let btn3 = document.createElement("button")
btn3.textContent = "Read More"
btn3.style.cssText = `
width:130px;
 height:28px;
padding:5px;
margin:75px 15px;
background-color: #000000d2;
border:none;
border-radius:5px;
color:white;
margin-top: px;
`
card3.append(btn3)
