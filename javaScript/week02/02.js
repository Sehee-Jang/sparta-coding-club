// 4. 구조 분해 할당 (Destructuring)
// 배열[]이나 객체{}의 속성을 분해하여 그 값을 변수에 담을 수 있게 해주는 문법


// ----------- 배열인경우
let [value1, value2] = [1, "new"]
console.log('1', value1);   // 1 1
console.log('2', value2);   // 2 new

let arr1 = ["value1", "value2", "value3"];
let [a, b, c] = arr1;

console.log(a); // value1
console.log(b); // value2
console.log(c); // value3

// arr2가 가지고 있는 요소의 개수 3개(value1, 2, 3), 할당받으려는 변수는 4개
// g값은 자동으로 아무런 값이 들어오지 않았음을 인식
let arr2 = ["value1", "value2", "value3"];
let [d, e, f, g = "value4"] = arr2;

console.log(d); // value1
console.log(e); // value2
console.log(f); // value3
console.log(g); // undefined

// ----------- 객체인 경우: key가 중요
// user1 객체
let user1 = {
    name: 'abc',
    age: 30,
};

// 왼쪽의 변수가 오른쪽의 key랑 매칭이 됨
// 왼쪽에 있는 name이 "def"를, age가 30을 가지게 됨
// let { name, age } = {
//     name: "def",
//     age: 30,
// };

let { name, age } = user1;


console.log("User1's name: ", name); // string
console.log("User1's age: ", age);  // number

// -----------  새로운 이름으로 할당

// 방법 1
let user2 = {
    name2: 'abc',
    age2: 30,
};

/**
 * 원래는 name2에 'abc'가 age2에 30이 매칭되지만
 * 구조분해할당을 이런식으로 작성하면
 * name2에 'abc'가 아니라 name2라는 값으로 가져오되 그것을 newName2 변수에 담는다
 */

let {
    name2: newName2,
    age2: newAge2,
} = user2;

console.log("User2's newName: ", newName2); // User2's newName:  abc
console.log("User2's newAge: ", newAge2); // User2's newAge:  30

// 방법 2 (방법 1과 같은 코드)
// let { name2: newName2, age2: newAge2, } = {
//     name2: 'abc',
//     age2: 30,
// };
// console.log("User2's newName: ", newName2); // User2's newName:  abc
// console.log("User2's newAge: ", newAge2); // User2's newAge:  30

// 없었던 값을 할당하려고 할 때
let { name2, age2, birthday2 } = user2;
console.log(name2); //  abc
console.log(age2);  // 30
console.log(birthday2); // undefined

// 초기값 설정 가능
let { name3, age3, birthday3 = "today" } = user2;
console.log(name3); //  abc
console.log(age3);  // 30
console.log(birthday3); // today


