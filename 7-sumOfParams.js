let add = function(a) {
    return function(b) {
        if(b){
            return add(a + b);
        }
            return a;
    }
}

add(1)(2);
console.log(add(1)(2)(3)(4)(5)());
 
//sum(1,2)(3,4) 

let sum = function(...args) {
    let total1 = 0
    for (let i = 0; i < args.length; i++) {
        total1 += args[i];
    }
    return function(...args2) {
        if (args2.length>0){
            let total2 = 0
            for (let i = 0; i < args2.length; i++) {
                total2 += args2[i];
            }
            return sum(total1 + total2);
        }
        return total1;
    }
}

console.log(sum(1,2,3)(3,4,5)(6)()); 
console.log(sum(1,2)(3,4)());
console.log(sum(1)(2,3,4)())
console.log(sum(1,2,3,4)());
//add(1,2,3,4) or add(1)(2,3,4) etc
