// for

// basic for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// for loop with array
let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// for...in
let person = { name: "John", age: 30, gender: "male" };

for (let key in person) {
    console.log(key + ": " + person[key]);
}