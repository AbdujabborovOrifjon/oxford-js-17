
// HOMEWORKKK
// 1 masala ===============================

// let people = [
//   { id: 1, firstName: "Eshmat", lastName: "Toshmatov", age: 20, status: "Talaba" },
//   { id: 2, firstName: "Gulmat", lastName: "Surmatov", age: 17, status: "O'quvchi" },
//   { id: 3, firstName: "Dilshod", lastName: "Karimov", age: 25, status: "Ishchi" },
//   { id: 4, firstName: "Malika", lastName: "Xoliqova", age: 30, status: "Uqituvchi" },
//   { id: 5, firstName: "Zafar", lastName: "Bozorov", age: 19, status: "Talaba" },
//   { id: 6, firstName: "Umida", lastName: "Raxmatova", age: 22, status: "Tadbirkor" },
//   { id: 7, firstName: "Rustam", lastName: "Ziyodov", age: 35, status: "Dasturchi" },
//   { id: 8, firstName: "Nodira", lastName: "Saidova", age: 28, status: "Muhandis" },
//   { id: 9, firstName: "Javlon", lastName: "Qurbonov", age: 24, status: "Frilanser" },
//   { id: 10, firstName: "Shahnoza", lastName: "Ergasheva", age: 18, status: "O'quvchi" }
// ];
// let person = people.map(obj => {
//   if (obj.id === 5) {
//     return {
//       id: 5,
//       firstName: "Ali",
//       lastName: "Valiyev",
//       age: 25,
//       status: "Dasturchi"
//     };
//   }
//   return obj;
// });

// console.log(person);

// ==============================================================================================

// 2 masalaaaaaaaa

// let people = [
//   { id: 1, firstName: "Eshmat", lastName: "Toshmatov", age: 20, status: "Talaba" },
//   { id: 2, firstName: "Gulmat", lastName: "Surmatov", age: 17, status: "O'quvchi" },
//   { id: 3, firstName: "Dilshod", lastName: "Karimov", age: 25, status: "Ishchi" },
//   { id: 4, firstName: "Malika", lastName: "Xoliqova", age: 30, status: "Uqituvchi" },
//   { id: 5, firstName: "Zafar", lastName: "Bozorov", age: 19, status: "Talaba" },
//   { id: 6, firstName: "Umida", lastName: "Raxmatova", age: 22, status: "Tadbirkor" },
//   { id: 7, firstName: "Rustam", lastName: "Ziyodov", age: 35, status: "Dasturchi" },
//   { id: 8, firstName: "Nodira", lastName: "Saidova", age: 28, status: "Muhandis" },
//   { id: 9, firstName: "Javlon", lastName: "Qurbonov", age: 24, status: "Frilanser" },
//   { id: 10, firstName: "Shahnoza", lastName: "Ergasheva", age: 18, status: "O'quvchi" }
// ];


// let person = people.filter((obj)=>{
//     return obj.lastName.endsWith("va")
// })
// console.log(person);

// ===============================================================
// 3 masalaaaaaaaaaa

// let people = [
//   { id: 1, firstName: "Eshmat", lastName: "Toshmatov", age: 20, status: "Talaba" },
//   { id: 2, firstName: "Gulmat", lastName: "Surmatov", age: 17, status: "O'quvchi" },
//   { id: 3, firstName: "Dilshod", lastName: "Karimov", age: 25, status: "Ishchi" },
//   { id: 4, firstName: "Malika", lastName: "Xoliqova", age: 30, status: "Uqituvchi" },
//   { id: 5, firstName: "Zafar", lastName: "Bozorov", age: 19, status: "Talaba" },
//   { id: 6, firstName: "Umida", lastName: "Raxmatova", age: 22, status: "Tadbirkor" },
//   { id: 7, firstName: "Rustam", lastName: "Ziyodov", age: 35, status: "Dasturchi" },
//   { id: 8, firstName: "Nodira", lastName: "Saidova", age: 28, status: "Muhandis" },
//   { id: 9, firstName: "Javlon", lastName: "Qurbonov", age: 24, status: "Frilanser" },
//   { id: 10, firstName: "Shahnoza", lastName: "Ergasheva", age: 18, status: "O'quvchi" }
// ];

// let person = people.filter((obj)=>{
//     return obj.id !== 4 &&  obj.id !== 9
// })
// console.log(person);

// ============================================================

// 4 MASALAAAAAA


// let people = [
//   { id: 1, firstName: "Eshmat", lastName: "Toshmatov", age: 20, status: "Talaba" },
//   { id: 2, firstName: "Gulmat", lastName: "Surmatov", age: 17, status: "O'quvchi" },
//   { id: 3, firstName: "Dilshod", lastName: "Karimov", age: 25, status: "Ishchi" },
//   { id: 4, firstName: "Malika", lastName: "Xoliqova", age: 30, status: "Uqituvchi" },
//   { id: 5, firstName: "Zafar", lastName: "Bozorov", age: 19, status: "Talaba" },
//   { id: 6, firstName: "Umida", lastName: "Raxmatova", age: 22, status: "Tadbirkor" },
//   { id: 7, firstName: "Rustam", lastName: "Ziyodov", age: 35, status: "Dasturchi" },
//   { id: 8, firstName: "Nodira", lastName: "Saidova", age: 28, status: "Muhandis" },
//   { id: 9, firstName: "Javlon", lastName: "Qurbonov", age: 24, status: "Frilanser" },
//   { id: 10, firstName: "Shahnoza", lastName: "Ergasheva", age: 18, status: "O'quvchi" }
// ];
// let person = people.find(obj => obj.id === 7);
// person.firstName = "Gulbashakar";
// console.log(person);

// ========================================================================

// 5 MASALAAAAA


// let people = [
//   { id: 1, firstName: "Eshmat", lastName: "Toshmatov", age: 20, status: "Talaba" },
//   { id: 2, firstName: "Gulmat", lastName: "Surmatov", age: 17, status: "O'quvchi" },
//   { id: 3, firstName: "Dilshod", lastName: "Karimov", age: 25, status: "Ishchi" },
//   { id: 4, firstName: "Malika", lastName: "Xoliqova", age: 30, status: "Uqituvchi" },
//   { id: 5, firstName: "Zafar", lastName: "Bozorov", age: 19, status: "Talaba" },
//   { id: 6, firstName: "Umida", lastName: "Raxmatova", age: 22, status: "Tadbirkor" },
//   { id: 7, firstName: "Rustam", lastName: "Ziyodov", age: 35, status: "Dasturchi" },
//   { id: 8, firstName: "Nodira", lastName: "Saidova", age: 28, status: "Muhandis" },
//   { id: 9, firstName: "Javlon", lastName: "Qurbonov", age: 24, status: "Frilanser" },
//   { id: 10, firstName: "Shahnoza", lastName: "Ergasheva", age: 18, status: "O'quvchi" }
// ];

// let person = people.sort((a, b)=>{
//     return  a.lastName.localeCompare(b.lastName)
// })
// console.log(person);



// =======================================================================


// Question:

// 1. id si 5 ga teng bo'lgan odamni ma'lumotini manashu object ga almashtirib bering.
// {id: 5, firstName: "Ali", lastName: "Valiyev", age: 25, status: "Dasturchi"}

// 2. people array ichida lastName ning oxiri “va” qo’shimchasi bilan tugagan shaxslar qolsin.

// 3. id si 4 va 9 ga teng bo’lgan odamlar arraydan o’chirib tashlansin.

// 4. id si 7 ga teng bo’lgan object firstName ning qiymatini “Gulbashakar” ga o’zgartirib bering.

// 5. shu people arrayni lastName bo’yicha sort qilib bering.




// ====================================================================================

// 2 kun 

// Immutable : forEach()  length, at()  , indexOf(), lastIndexOf(), includes(),  slice(),



// mutable :    map(), filter(), find(), findIndex(), findLastIndex(),
//  sort(), every(), some(), flat(), flatMap(), fill(), copyWithin()
// push(), pop(), unshift(), shift(), delete     splice();
// split(), join(), reverse(), concat(),


// ========================================================================================


// 3 kunnnn 

// / 1.
// let str = "Men Algoritm IT markazida tahsil olaman";
// // Berilgan matndan birinchi uchragan unli harf bilan oxirgi
// // uchragan undosh harf indexlari ayirmasini chiqaring.

// let undosh = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"
// let unli = "aeiouAEIOU"
// let arr = str.split("")
// let unliharflar = arr.findIndex((w)=>unli.includes(w))
// let undoshharflar = arr.findLastIndex((h)=>undosh.includes(h))

// let javob =undoshharflar -  unliharflar 


// console.log(javoblar);


// =============================================

// 2.
// let str = "A1g0r1t9m8";
// // String ichidagi raqamlarni oldingi o'ringa, harflarni esa oxirgi o'ringa o'tkazing.

// let num = "";
// let harf = "";

// for (const s of str) {
//     if (!isNaN(s) && s!== "") {
//          num += s
//     }else{
//         harf += s
//     }
// }

// let javob = num + harf
// console.log(javob);


// ==============================================

// // 3.
// let str = "men algoritm markazida o‘qiyman";
// // matnning o'rtasidagi 1 ta kichik harfni katta xarfga almashtirib bering.

// let arr = str.replace("r", "R")
// console.log(arr);


// ==========================================