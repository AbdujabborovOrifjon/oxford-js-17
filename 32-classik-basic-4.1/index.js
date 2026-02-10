// class asadbek {
//     constructor(name, age, status) {
//         this.name = name;
//         this.age = age;
//         this.status = status;
//         console.log("asadbek ako segap");
        
//     }
//     getdata (){
//         console.log("sekora");
        
//     }
// }

// let obj = new asadbek("ali", 14, "talabachi");
// obj.getdata()
// console.log(obj);


// class getdata {
//     constructor(ism) {
//         this._ism = ism
//     }

//     get getism(){
//         return this._ism.toUpperCase();
//         }
//     }
//     set getism(props){
//             if (props.length < 5) {
//             console.log("siz xato qiymat kiritdingiz");
//             return;
//     }
//     this._ism = props
//     }
// let obj = new getdata("oxford")

// console.log(obj.getism);



// class GetData  {
//     constructor (ism)  {
//         this._ism = ism      
//     }

//     get getIsm () {
//         return this._ism.toUpperCase()
//     }

//     set getIsm (props) {
//         if(props.length < 5) {
//             console.log("six noto'g;ri qiymat kiritdingiz");
//             return;         
//         }
//         this._ism = props
//     }
// }

// let obj = new GetData ("Oxford")

// console.log(obj.getIsm);
// obj.getIsm = "spc"
// console.log(obj.getIsm);
// obj.getIsm = "algoritm"
// console.log(obj.getIsm);




// — Computed named classes

let name = "hii";
let i = "name";

class parent {
    constructor(ism) {
        this[i] = ism;
    }
    [name] (){
        console.log(this[i]);
        
    }
}
let obj = new parent("ali")

obj.hii()

console.log(obj);
