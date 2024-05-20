/*
JS is dynamically typed language

# Primitive
7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

Examples of Symbol :-
const a = Symbol('1234');
const b = Symbol('1234');

console.log(a, b);

console.log(a === b);


# Reference (Non-primitive)
3 types: Object, Array, Functions


const heros = ["Shaktiman", "Nagraj", "Doga"];

let myObj = {
    name: "Somu",
    age: 27,
}

const myFunction = function() {
      console.log("Hello world!");
}
console.log(myFunction);
*/



// ************* Memories **************

/*
    // Primitive        => Stack memory
    
    Example: 1
    ---------
    let userDetails = "Ravi Kumar";

    let userCred = userDetails;

    userCred = "RaviK";

    console.log(userDetails);
    console.log(userCred);


    // Non-primitive    => Heap memory

    Example: 2
    --------
    let voterDetails = {
    name: "Somu",
    age: 25,
    }

    let vote = voterDetails;

    vote.age = 28;
    console.log(`my age: ${vote.age}`);

    console.log(`my original age: ${voterDetails.age}`);

*/