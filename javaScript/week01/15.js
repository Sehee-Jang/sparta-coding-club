// 객체 메소드
// Object.keys()﻿: key를 가져오는 메서드
let person = {
    name: "홍길동",
    age: 30,
    gender: "남자"
};

let keys = Object.keys(person);

console.log(keys);   // ["name", "age", "gender"]

// Object.values()
let values = Object.values(person);
console.log(values);   // ["홍길동", 30, "남자"]

// Object.entries()
let entries = Object.entries(person);
console.log(entries);   // [ [ 'name', '홍길동' ], [ 'age', 30 ], [ 'gender', '남자' ] ]

// Object.assign()
let newPerson = Object.assign({}, person, { age: 35 });
console.log(newPerson);   // { name: "홍길동", age: 35, gender: "남자" }