// let sekund = new Date().getSeconds()

// let inter = setInterval(() => {

//     console.log(sekund);

// if (inter === sekund) {
//     clearInterval(inter)
// }
// }, 1000);


// function getdata(a,b,c) {
//     console.log(this.a,b,c);
    
// }

// getdata.call("salom",55, "alik")

// let sekund = 0;
// let minut = 0;

// let set = setInterval(() => {
//     sekund++;
//     if (sekund === 60) {
//         minut++;
//         sekund = 0; // sekundni qayta 0 ga o‘rnatamiz
//     }
//     console.log(`${minut} min ${sekund} sek`);

//     // Agar siz intervalni 1 minutdan keyin to‘xtatmoqchi bo‘lsangiz:
//     // if (minut === 1) {
//     //     clearInterval(set);
//     //     console.log("Interval to‘xtatildi!");
    
// }, 1000);


// for (let i = 0; true; i++) {
//     console.log(i);
        
// }


// ===================================================

// Function advence
// call, aplly, bind

// 1 call

// let obj = {name:"gani"}
// function getdata( age, status){
//     console.log(this.name, age, status);

// }

// getdata.call(obj, 55, "ishchi")
// call ning vazifasi — call ichidagi 1-argumentni
// functiondagi context (this) ga biriktirish

// APPLY 

// apply ning vazifasi —
// call ichidagi 1-argumentni functiondagi context (this) ga biriktiradi,
// qolgan argumentlarni esa ARRAY ko‘rinishida uzatadi

// BIND 
// bind ning vazifasi —
// functiondagi context (this) ni biriktirib,
// YANGI funksiya qaytaradi (darhol chaqirmaydi)





// setTimeout(() => {
//     console.log("salom");
    
// }, 1000);