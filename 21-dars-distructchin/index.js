
let parent = {
    id:1,
    name:"eshmat",
    age:60,
    child:{
        id:2,
        name:"toshmat",
        age:40,
        subchild:{
        id:3,
        name:"gulmat",
        age:20
    }
    }
}
let {child:{name, subchild:{name:ism}}} = parent

console.log(name, ism);



let arr = [1, 2 ,3 , 4, "salom", 7, "alik"]

let [bir, uch]= arr

// console.log(bir);


function get(a, b, ...c) {
    let mul = a * b
   let sum =  c.reduce((acc, cur)=>acc + cur, 0)
return mul + sum
}

console.log(get(1, 2, 3, 4, 5, 6, 7));
