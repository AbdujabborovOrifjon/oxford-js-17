// — Public and Private classes

// class Car {
//     #password = "54321"
//     constructor(uzb) {
//         this.uzb = uzb
//     }

//     getpassword(){
//         return this.#getpassword2()
//     }
//     #getpassword2(){
//         return this.#password
//     }
// }



// let obj = new Car("gm")

// console.log(obj.getpassword());
// // console.log(obj.#getpassword2()); togridan togri chaqirib bolmaydi ❌
// // console.log(obj.#password2()); togridan togri chaqirib bolmaydi ❌



// ===============================================================================


// let parent = {
//     getparent(){
//         return "parent"
//     }
// }

// let child = {
//     getchild(){
//         return "child"
//     }
// }

// class Subchild{
//     getsubchild(){
//         return "subchild"
//     }
// }

// Object.assign(Subchild.prototype, parent, child)

// let obj = new Subchild()

// console.log(obj.getchild());



let parent = (data)=> class extends data{}