// let obj = {
//     id:1,
//     name:"asadbek",
// }

// — preventExtensions(obj) - no add, can update, can delete
// Object.preventExtensions(obj)
// obj.age = 14
// // delete obj.name
// obj.name = "aaaasssaadbekkkkkk privet"
// console.log(obj);
// console.log(Object.isExtensible(obj));




// — seal(obj) - no add, can update, no delete

// delete obj.name
// console.log(obj);
// console.log(Object.isSealed(obj));




// — freeze(obj) - no add, no update, no delete
// Object.freeze(obj)
// delete obj.name
// obj.name = "aaaasssaadbekkkkkk privet"
// obj["age"] = 25
// console.log(obj);
// console.log(Object.isSealed(obj));

// let obj = {
//     _password:  "12345",
//     set getPassword(props) {
//         if(props.length < 5) {
//             console.log("siz yetarli qiymat kiritmadingiz");
//             return;
//         }
//         this._password = props
//     },

//     get getPassword() {
//         return this._password
//     }
// }

// obj.getPassword = "83765"
// console.log(obj.getPassword);


let obj = {
    name:"jamshid",
    age:15,

}
obj.name = "jamila"
console.log(obj);


// Object.preventExtensions(obj)
// obj.status = "oqituvchi"
// console.log(obj);
