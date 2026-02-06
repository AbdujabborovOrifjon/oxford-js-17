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
// creatdata("azizbek", "usmonov", 15)


// console.log(data);

// READ     ===============================================


// readaction("ev") 

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
// readaction("ism")
// readaction("familiya")
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
// sortaction("familiya")
// sortaction("yosh")

// console.log(data);


// UPDATE   


// let update = (idedit, name)=>{
//     data =  data.map((obj)=>obj.id === idedit && obj.ism === name)
// }
// update(3, "asadxon")
// console.log(data);



// console.log(new Date().getTime());


// let edit = (editid, editname)=>{
//    data =  data.map((obj)=>obj.id === editid ? {...obj,ism : editname}: obj)
   
// }
// edit(4, "salimboy")
// console.log(data);
 


let delet = (deleteid)=>{
    data =data.filter((obj)=>{
        if (obj.id !== deleteid) {
            return obj
        }
    })
}
delete(2)
console.log(data);
