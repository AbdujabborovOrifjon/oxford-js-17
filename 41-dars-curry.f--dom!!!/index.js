// SATATIKK uslul 

// function getsum(a) {
//     return (b)=>{
//         return(c)=>{
// return  a+b+c
//         }
//     }
// }


// console.log(getsum(1)(2)(3));

// =====================================================

// Dinamikkk 

// function getsum(a) {
//     return (b)=>{
//         if (b) {
//             return getsum(a+b)
//         }
//         return a
//     }
// }

// console.log(getsum(1)(2)(3)(4)(5)(6)(8)(9)(10)());

// ========================================================

// Vapshe qisqartma dinamik usulii 

// let getsum = (a)=> (b)=> (b ? getsum(a+b):a)
// console.log(getsum(1)(2)(3)(4)(5)(6)(8)(9)(10)());


// curry funcion funcsiyani 1 necha marta chaqirilgan da ishlatiladii !!!

function get(a) {
  
        return (b)=>{
            if (b) return get(a + b)
                return  a
        }
    
}



console.log(get(1)(2)(3)(4)(5)(6)(7)(8)(9)());

console.log(window.location);
