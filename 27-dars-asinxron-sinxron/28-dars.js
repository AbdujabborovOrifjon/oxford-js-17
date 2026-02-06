// function getdata(a,b,c) {
//    console.log(a,b,c);
    
// }

// getdata("salom",55,"alik")

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




let obj = {name:"gani"};

function getdata(age, status){
    console.log(this.name, age, status);
}

// Call ishlatilishi
getdata.call(obj, 55, "ishchi");

// call ning vazifasi — call ichidagi 1-argumentni
// functiondagi context (this) ga biriktirish