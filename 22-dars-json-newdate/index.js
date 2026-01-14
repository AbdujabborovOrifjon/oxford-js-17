let date = new Date()
console.log(date.getFullYear());  // hozirgi yill 
console.log(date.getMonth());   // hozirgi oyy 
console.log(date.getDate());    //hozirgi sanaaa 
console.log(date.getDay());     // hozrgi hafta kuniii 
console.log(date.getHours());   // hpzrgi soat
console.log(date.getMinutes()); // hozirgi minut
console.log(date.getSeconds()); //hozirgi sekund
console.log(date.getMilliseconds()); 
// hozirgi sekund ichidagi millisekund (0–999)

console.log(date.getTime());    
// 1970-yil 1-yanvardan hozirgacha o‘tgan millisekundlar

console.log(date.getTimezoneOffset()); 
// lokal vaqt bilan UTC orasidagi farq (minutlarda)

console.log(date.toISOString()); 
// ISO formatdagi sanani "-" bo‘yicha bo‘lib, massiv qiladi

console.log(date.toDateString()); 
// sana (hafta kuni + oy + kun + yil)

console.log(date.toLocaleDateString()); 
// lokal formatda faqat sana

// console.log(date.toLocaleDateString()); 
// // lokal formatda faqat sana (takror)

// console.log(date.toUTCString()); 
// // UTC bo‘yicha sana va vaqt

// console.log(date.toLocaleString());  
// // lokal formatda sana + vaqt





