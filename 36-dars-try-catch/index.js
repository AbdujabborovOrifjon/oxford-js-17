//     console.log(asadbek);
// try {
//     let asadbek = "men dasturchiman "
    
// } catch (error) {
//     console.log(error.name);
    
// }finally{
//     console.log("yoq");
    
// }





// setTimeout(() => {
//     console.log("settimeoyt - 1");
    
// setTimeout(() => {
//     console.log("settimeoyt - 2");
//     setTimeout(() => {
//     console.log("settimeoyt - 3");
//     setTimeout(() => {
//     console.log("settimeoyt - 4");
    
// }, 1000);
// }, 900);
// }, 700);
// }, 500);






// Proomiceee 

// let data = new Date()
// let ms = data.getMilliseconds()

// let promice = new Promise((resolve, reject)=>{
//     if(ms % 2) resolve(`${ms} Toq son`)
//         else reject(`${ms} juft son`)
// })

// promice.then((res)=>{
//     console.log(res, "bu then");
    
// }).catch((err)=>{
//     console.log(err, "buu catch");
    
// }).finally(()=>{
//     console.log("code tugadi ");
    
// })




// async function getdata() {
//     let data = await fetch("https://jsonplaceholder.typicode.com/users");
//     data = await data.json()
//     console.log(data);
    
// }

// getdata()




// ===========================================

// try catch
// try {
//     console.log(a);
    
//     let a =100
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
    
// }
// 🎯 Eng muhim maqsad:

// 👉 Dastur to‘xtab qolmasligi
// 👉 Xatoni nazorat qilish
// 👉 Foydalanuvchiga chiroyli xabar chiqarish

// ================================================
// CallBeck - deb bir funcsiya boshqa bir funcsiyani parametrida kelsa shu callbeck funcsiya 
// Calbeck

// function getfunc(call) {
//     console.log(call());
    
// }

// getfunc(()=>{
//     return "bu callback"
// })


// function get(callback) {
//     callback("salom dasturchilar")
// }

// let sumget = (sms)=>{
//     console.log(sms);
    
// }

// get(sumget)


// =========================================================================

// — Built-in Callbacks -> built-in callbeck -- > bu ozida defolt functsiyasi bor degani 


// =============================================================

// Promiceeee  => callback hell ni oldini olish uchun ishlatiladii 
let date = new Date()
let ms = date.getMilliseconds()
let pro = new Promise((resolve, reject)=>{
  
    if(ms %2) resolve(`${ms} toq son`)
        else reject(`${ms} juft son`)
})
pro.then((res)=>console.log(res)).catch((rej)=>console.log(rej)).finally(()=>{
    console.log("ishladi chiqdi ishladi");
    
})