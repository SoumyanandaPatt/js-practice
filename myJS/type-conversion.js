// const num = 30;

// const num1 = "30abc";

// console.log(typeof num); // number

// console.log(typeof num1); // string

// const num3 = Number(num1); // type conversion to Number type
// console.log(typeof num3);

// console.log(num3); // If a actual string having number then it will convert to number type. Else it will give result as NaN (Not a Number).

// // Type of NaN in Javascript will be "number" only

// // console.log(typeof null);  => object

// const num4 = null;
// const nullConvertedNumber = Number(num4);

// console.log(nullConvertedNumber);


/*
    33      => 33
    "33"    => NaN
    true    => 1
*/

// let isLoggedIn = "name";

// let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn);

// 1    => true; 0  => false;
// ""   => false
// "name"=> true


// let anyNum = 33;

// let stringNumber = String(anyNum);
// console.log(typeof stringNumber);


// ********************** Operations ********************

let value = 3;

let negativeValue = -value;

// console.log(negativeValue);

let str1 = "hello"
let str2 = " Somu"

let str3 = str1 + str2
// console.log(str3);

// console.log(-true);


// Pre-fix & Post-fix

let x = 3;
const y = x++;

// console.log(`x: ${x}, y: ${y}`);


let a = 3;
const b = ++a;

// console.log(`a: ${a}, b: ${b}`);





// Comparison Operation //

console.log("2" > 1);
console.log("02" > 1);

console.log(typeof(Number("02")));