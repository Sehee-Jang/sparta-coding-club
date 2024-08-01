// apply

var numbers = [10, 20, 3, 16, 45];

var max = Math.max.apply(null, numbers);    //  45
var min = Math.min.apply(null, numbers);    //  3

// console.log("apply: ", max, min);

// spread operator
console.log(numbers);   // [ 10, 20, 3, 16, 45 ]
console.log(...numbers);    // 10 20 3 16 45

var max = Math.max(...numbers);    //  45
var min = Math.min(...numbers);    //  3

console.log("spread: ", max, min);  // 45 3
