
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






