// let obj = {name:"asadbek", age:55}
// // value, writable, enumable,  configurable

// Object.defineProperty(obj, "name", {writable: true})
// obj.name = "asadxon"
// // console.log(Object.getOwnPropertyDescriptor(obj,"name"));

// // clone = Object.getOwnPropertyDescriptors(obj)

// // console.log(clone);

// console.log(obj);


// let obj = {name:"asadbek", age:55}
// Object.defineProperty(obj, "name", {configurable: false})
// delete obj.name
// obj.name = "asadbek privet"
// console.log(obj);

// for (const key in obj) {
    
//     console.log(key[value]);
    
    
// }


let obj = {name:"ali", age:20}

// console.log(Object.getOwnPropertyDescriptor(obj, "name"));

// console.log(obj);

clone = Object.getOwnPropertyDescriptors(obj)
console.log(clone);
