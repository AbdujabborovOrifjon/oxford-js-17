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



// const Parent = (data) => class extends data {
//     getParentName() {
//         return "Parent"
//     }
// }
// const Parent2 = (data) => class extends data {
//     getParent2Name() {
//         return "Parent2"
//     }
// }
// const Child = (data) => class extends data {
//     getChildName() {
//         return "child"
//     }
// }

// class Boglovchi {}

// class SubChild extends Parent(Child(Parent2(Boglovchi))) {
//     getSubChildName() {
//         return "Sub Child"
//     }
// }

// let obj = new SubChild ();

// console.log(obj.getParentName());
// console.log(obj.getParent2Name());
// console.log(obj.getChildName());
// console.log(obj.getSubChildName());


// class parent {

// }

// let obj = new parent()

// console.log(obj);



class Person {
  speak() {
    console.log("Men gapiryapman");
  }
}

class Teacher extends Person {
  speak() {
    console.log("Men dars tushuntiryapman 📚");
  }
}

const t = new Teacher();
t.speak();
