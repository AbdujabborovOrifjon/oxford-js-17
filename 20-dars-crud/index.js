// CRUD

let data = [
    { id: 1, ism: "Otabek", familiya: "Valiyev", yosh: 14 },
    { id: 2, ism: "Orifjon", familiya: "Abdujabborov", yosh: 15 },
    { id: 3, ism: "Asadbek", familiya: "Atamirzayev", yosh: 15 },
    { id: 4, ism: "Salimjon", familiya: "Qahramonov", yosh: 16 },
];

// CREAT    ======================================

// let creatdata = (ism, familiya, yosh)=>{
//     data.push({id:data.length +1, ism, familiya, yosh})
// }

// creatdata("shohjahon", "gaybullayev", 17)

// console.log(data);

// READ     ===============================================

// let readaction = (prop)=>{
// data = data.filter((obj)=>obj.familiya.endsWith(prop))

// }
// readaction("ov")
// // readaction("ev")

// console.log(data);


// Staticcc ==

// let readaction = (prop)=>{
//     data.sort((a, b)=>{
//         if(prop === "ism") {
//             return a.ism.localeCompare(b.ism)
//         }else if (prop === "familiya") {
//             return a.familiya.localeCompare(b.familiya)

//         }else if (prop === "yosh") {
//             return a.yosh - b.yosh
//         }
//     })
// }
// // readaction("ism")
// // readaction("familiya")
// readaction("yosh")
// console.log(data);

// Dinamic ==

let sortaction = (prop) => {
    data.sort((a, b) => {
        if (typeof a[prop] === "string") return a[prop].localeCompare(b[prop])
        return a - b
    })
}
// sortaction("ism")
sortaction("familiya")
// sortaction("yosh")

console.log(data);


// UPDATE   