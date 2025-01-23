let score = "33aaa";

console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
//"33aaa" => NaN
//true => 1
//false => 0
//null => 0


let isLoggedIn = 1;
let booleanIsLogedIn = Boolean(isLoggedIn);
console.log(booleanIsLogedIn);

// 1 => true, 0 => false
// "" => false, "SomeValue" => true


let someNumber = 33;

let StringNumber = String(someNumber);
console.log(typeof StringNumber);
console.log(StringNumber);