//-- 5. 단축 속성명: property shorthand
const name = "nbc";
const newAge = "30";

// key - value pair
const obj = {
    name,   // 만약 왼쪽(key)과 오른쪽(value)의 이름이 같으면 생략 가능
    age: newAge
}

// const obj = {name, age}; // 배열 같지만 단축속성명을 사용한 객체

//-- 6. 전개 구문
// destrucuring 과 함께 가장 많이 사용되는 es6 문법 중 하나
let arr = [1, 2, 3];

console.log(arr);   // [ 1, 2, 3 ]
console.log(...arr);    // 1 2 3

/**
 * 언제 사용하는지?
 * 구조를 벗어버리고 새로운 구조로 덧입혀야 할 때 사용
 */

// ex) arr 1, 2, 3을 1, 2, 3, 4로 만들고 싶을 때
let newArr = [...arr, 4];
console.log(arr)    // [ 1, 2, 3 ]
console.log(newArr);    // [ 1, 2, 3, 4 ]

// 객체에서 적용할 때
let user3 = {
    name: 'nbc',
    age: 30,
}

let user4 = { ...user3 }

console.log(user3); // { name: 'nbc', age: 30 }
console.log(user4); // { name: 'nbc', age: 30 }

//-- 7. 나머지 매개변수
function exampleFunc(a, b, c) {
    console.log(a, b, c);
}

exampleFunc(1, 2, 3);   // 1 2 3

// 들어오는 매개변수의 갯수를 정확히 모를 때
function exampleFunc(a, b, c, ...args) {
    console.log(a, b, c);   // 1 2 3
    console.log(...args)    // 4 5 6 7
    console.log(args)       // [ 4, 5, 6, 7 ] 배열 형태로 반환
}

exampleFunc(1, 2, 3, 4, 5, 6, 7);

//-- 8. 템플릿 리터럴
// ``를 사용하여 자바스크립트 코드, 변수, 연산 등이 들어갈 수 있음
const testVaelue = "안녕하세요!";

console.log(`Hello World`);     // Hello World
console.log(`Hello World ${3 + 3}`);    // Hello World 6
console.log(`Hello World ${testVaelue}`);   // Hello World 안녕하세요!
console.log(`
    Hello,
    My name is javaScript!
    Nice to meet you.
    `);


//-- 9. named export vs default export 