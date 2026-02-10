// console.log("asadbek privet");

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8 ,9, 0, 0, 0 ]

// let newarr = arr.filter((v, i)=> v)
// console.log(newarr);

// let obj = {
//     name:"ali",
//     age:20
// }

// console.log(obj);


// let arr = [1,2,3,4,5,6]

// Array.prototype.test = function () {
//     let sum  =0
//     for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]        
//     } return sum
// }

// console.log(arr.test());


// let obj = {
//     name:"ali",
//     age:20,
// }
// Object.prototype.uzunligi = function () {
//    return  this.toString().length
        
// }

// console.log(obj.uzunligi());


let obj = {
    _pasword:"12345",
    set data(props){
        if (props.length > 4) {
console.log("siz kam parol kiritdingiz");

        }
    },
    get data(){
        return this._pasword
    }
}

obj.data = "99999"
console.log(obj);
