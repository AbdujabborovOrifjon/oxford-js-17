// class Parent{
//     constructor(childname, childage){
//         this.childname = childname;
//         this.childage = childage
//     }

//     getparent(){
//         console.log(this.childname, this.childage);
        
//     }
// }


// class Child extends Parent{
//     constructor(ism, yosh){
//         super(ism, yosh)
//     }

//     getchild(){
//         console.log("child");
        
//     }
// }
// let obj1 = new Child("asadbek", 10)
// obj1.getchild()
// obj1.getparent()






// class Parent {
//     data = [1, 2, 3, 4, 5, 7]
//     constructor(ism) {
//         this.ism = ism
//     }
    
//     getname(){
//         console.log(Parent);
        
//     }
// }


// class Child extends Parent{
//     data = {id:1, name:"asadbek"}
//     constructor(ism){
//         super(ism)
//         this.ism = ism
//     }

//     getname(){
//         console.log(Child);
        
//     }
// }

// let obj = new Child("toshmat")
// console.log(obj);




class Data{}

class Per {
    constructor(name, age){
        this.name = name;
        this.age = age
    }
}
let obj = new Per("ali", 50)

console.log(obj instanceof Data);
console.log(obj instanceof Per);


class Car {
    static model = "BMW"
    static getNAme () {
        console.log("bu custom car class");
        
    }
}

let obj1 = new Car()
console.log(obj1);