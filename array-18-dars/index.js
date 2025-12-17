// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// sum = 0

// arr.forEach((value) => {
//     sum += value
// });

// console.log(sum);

// ====================================================

// let newarr = arr.map((item)=>{
// return item ** 2
// })

// console.log(newarr);

// ======================================================

// let data = arr.filter((value)=>{
//     if (value % 2 === 0) return value
// })

// console.log(data);
// ======================================================


// let arr = [1, "oxford", 2, 3, 4, 5, 6, 7, 8, 9, "asadbekazizbek", 10]



// let val = arr.find((value, index, arr)=>{
// return value === "oxford"
// })
// console.log(val);


// ===============================================

// let valindex = arr.findIndex((asadbek)=>{
//     return asadbek === "oxford"
// })

// console.log(valindex);

// ================================================


// let vallastindex = arr.findLastIndex((asadbek)=>{
//     return asadbek === "asadbekazizbek"
// })

// console.log(vallastindex);

// ========================================================

// let arr = [1, "oxford", 2, 3, 4, 5, 6, 7, 8, 9, "asadbekazizbek", 10]




// let val = arr.findLast((value, index, arr)=>{
// return value === "oxford"
// })
// console.log(val);

// =====================================================




// MASALAAAAAAALARRR


// let arr = [1, 3, 7, 2, 5, 10, 9]

// let newarr = arr.filter((item)=>{
//     if (item % 2 === 0) {
//          return item * 2
//     } 
// }).map((value)=>{
//     return value ** 2
// })

// console.log(newarr);

// ===========

// let arr = [1, "olam", 5, "uzum", 7, "nok"]
 
// let newarr = arr.map((value)=>{
//    if(typeof value === "number")    return value *= value
// return value

// }

// )  


// console.log(newarr);




// let arr = [ 2, "pxodh", 5]

// let newarr = arr.find((value)=>{
// return true
// })

// console.log(newarr);





// =========================================================================================











// Homework

// 1 masala 
// let arr = [2, 4, 6, 8, 10]

// let arrmap = arr.map((value)=>{
// return value ** 2
// })

// console.log(arrmap);






// 2 masala


// let arr = ["apple", "banana", "cherry", "date"];

// arr.forEach((value)=>{
//     console.log(value.length);
    
// })






// 3 masala 
//   const prices = [1000, 2500, 4000, 7000];

// let narx = prices.map((val)=>{
//     return val * 5
// })
// console.log(narx);







// 4 masala

// const users = [
//   { name: "Ali", age: 20, city: "Tashkent" },
//   { name: "Vali", age: 25, city: "Samarkand" },
//   { name: "Hasan", age: 18, city: "Bukhara" }
// ];

// let abek = users.map((user) => {
//     delete user.city
//     return user
// });
// console.log(abek);





// 5 masala

// const numbers = [3, 6, 9, 12, 15, 18];

// let num = numbers.filter((value)=>{
//     if (value % 2 === 0) return value
// })

// console.log(num);





// 6 masala

// const products = [
//   { title: "Telefon", price: 1500000 },
//   { title: "Quloqchin", price: 80000 },
//   { title: "Noutbuk", price: 5500000 },
//   { title: "Sichqoncha", price: 60000 }
// ];
// let res = products.filter((value)=>{
//     return value.price > 100000 
// })

// console.log(res);






// 7 masala 


// const users = [
//   { name: "Aziz", age: 16 },
//   { name: "Dilshod", age: 17 },
//   { name: "Malika", age: 19 },
//   { name: "Sardor", age: 21 }
// ]

// let us = users.find((user)=> user.age > 17)
//  console.log(us);
 




// 8 masalaaa

//  const texts = ["html", "css", "javascript", "react", "nodejs"];
//     let tt = texts.find((value)=>{
//         return value.includes("j")
//     })

// console.log(tt);





// 9 masala

//  const numbers = [5, 10, -3, 7, -1, 20];

// let num = numbers.map((value, index)=> value <0 && index).filter((v)=>v)

// console.log(num);

//  const numbers = [5, 10, -3, 7, -1, 20];

// let newarr = []
// numbers.forEach((num, i)=>num < 0 && newarr.push(i))
// console.log(newarr);


// 10 masala

// const users = [
//   { name: "Ali", email: "ali@mail.ru" },
//   { name: "Vali", email: "vali@gmail.com" },
//   { name: "Hasan", email: "hasan@yahoo.com" },
//   { name: "Husan", email: "husan@gmail.com" }
// ];

// let index = users.findIndex((value)=>value.email.endsWith("@gmail.com"))
// console.log(index);

















// ===========================================================================================




// let arr = ["html", "css", "js", "react",]

// console.log( arr.join("   "));   //    Array malumotlarni stringga aylantiradi


// console.log(arr.reverse()); //   Array malmotlarni teskari tartibda chiqaradi



// let a = [1, 2, 3, 4,]
// let b = [5, 6, 7, 8,]
// let newarr = arr.concat(a, b)
// console.log(newarr);          //  Array malumotlarni qoshib beradi 2 va undan ortiq arraylarni



//  console.log(arr.slice(1, 3));  // Array malumotlarni indexni kiritsak kesib beradi nusxa olib beradi   asl arrayga tasir qilmaydi



// let newarr = arr.splice(startidex, deleteCount, repleser)  //splice 3 ta qiymat oladi 
// let newarr = arr.splice(0, 1) //  splice asl arrayga tasir korsatadi hozi 0 indexni 1 ta elementini kesib oladi
// console.log(newarr);
// console.log(arr);


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newarr = arr.forEach((value, index, arr)=> {
//     // console.log(value, index, arr);
   
// })


// let newarr2 = arr.map((value, index, arr)=> {
//    return value * 2;
//     console.log(value, index, arr);
  
    
// })

// console.log(newarr2);




// let newarr = arr.find((value)=> {
// if (value === 2) return value;
// })
// console.log(newarr);


// 3
// 4
// 5
// 6
// 7
// 8
// Adwenced Array///

// Array.filter- bu method ishlatilishdan maqsad array elementlarini bizning shartga togri kelganini qoldiradi , qolganini chiqarib tashlaydi.
// Array.map - bu returnga qaytadi ya'ni return mapdan ishlaydi.
// Array.forEach - bu har bir elementning navbati bilan funksiya bajaradi.
// Array.find - bu shartga mos birinchi elementni qaytaradi.
// Array.findIndex - bu shartga mos birinchi elementning indexni qaytaradi.(-1)
// array.lastfindIndex- bu shartga mos oxirgi indexni qaytaradi . (-1)


