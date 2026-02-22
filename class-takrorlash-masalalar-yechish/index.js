// class Parent {
//     constructor(on, yigirma){
//         this.on = on;
//         this.yigirma = yigirma;
//     }
    
//     getmul(){
//         return this.on * this.yigirma;  
//     }
// }

// class Child extends Parent {
//     constructor(o, y){
//         super(o, y); 
//         this.o = o;
//         this.y = y;
//     }
    
//     getsum(){
//         return this.o + this.y;
//     }
// }

// class Boglovchi extends Child {
// }

// let obj1 = new Child(10, 20);
// console.log(obj1.getsum());  
// console.log(obj1.getmul());  





// class Masala {
//     constructor(a, b) {
//         this.a = a;
//         this.b = b;
//     }
// }

// class kopay extends Masala {
//     getsum() {
//         return this.a * this.b;
//     }
// }

// class Qoshish extends Masala {
//     getmul() {
//         return this.a + this.b;
//     }
// }

// let K = new kopay(10, 20);
// let Q = new Qoshish(10, 20);

// const sum = K.getsum();   
// const num = Q.getmul();   

// const res = sum / num;

// console.log(res.toFixed(2));






// const Parent = (data) => class extends data {
//     getParentName() {
//         return 10
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







let bori = (birlashtir)=> class extends birlashtir{
    getmul(){
        return 10 * 20
    }
}

let tulki = (birlashtir)=> class extends birlashtir{
    getsum(){
        return 10 + 20
    }
}


class birlashtir{}

class Hammasi extends bori(tulki(birlashtir)){
    constructor(){
        super()
        this.sum = null
    }
    set hisobla(props){
        if (props) {
            this.sum = props.a / props.b;
        }
        return this.sum
    }
   get hisobla(){
        return this.sum
    }
}

let obj = new Hammasi()
obj.hisobla = {a: obj.getmul(), b:obj.getsum()}
console.log(obj.hisobla);
