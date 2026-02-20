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




async function getdata() {
    let data = await fetch("https://jsonplaceholder.typicode.com/users");
    data = await data.json()
    console.log(data);
    
}

getdata()