// // 1. 변수 이름
// // 2. 변수 값
// // 3. 변수 선언
// // 4. 변수 할당
// // 5. 변수 참조

// const word = "Hello World!"; // 변수 이름 word를 선언하고 변수 값 Hello World!를 할당
// console.log(word);  // 변수 참조

// // ---------
// // 데이터 타입: 변수에 어떤 타입인지 저장될 수 있는가?

// const a = 1;    // 정수
// const b = 1.1;  // 실수

// const str = "This is javaScript."; // 문자열

// const lengthOfStr = str.length;
// console.log(lengthOfStr);

// const replacedStr = str.replace("This", "It")//찾는 값, 대체 값
// console.log(replacedStr);

// // ---------
// // boolean 타입
// const bool1 = true;
// const bool2 = false;

// // ---------
// // undefined, null

// // undefined: 값이 할당되지 않음
// // null: 값을 일부러 할당하지 않음

// // ---------
// // 객체와 배열

// // 객체 : key와 value 한 쌍
// let person = {
//     name: 'Alice',
//     age: 20,
// }
// person.name // 'Alice'
// person.age  // 20


// //  배열 : 객체의 한 종류
// let numbers = [1, 2, 3, , 4, 5];
// let fruit = ['apple', 'banana', 'orange'];

// const members = [
//     {
//         id: 1,
//         name: "Sehee",
//     },
//     {
//         id: 2,
//         name: "John"
//     }
// ];

// // 데이터 형 변환: 일관된 연산을 위해 형 변환이 필요함
// // 문자를 숫자로
// let strNum = "42";
// let actualNum = 8;

// const result = Number(strNum) + actualNum
// console.log(result);

// // 숫자를 문자로
// const num1 = 45;
// const num2 = "5";

// const num3 = num1 + Number(num2);
// console.log(num3); // 50

// const x = 10;
// const y = -5;

// console.log("===============")

// result1 = x + y;
// console.log(result1);

// result2 = x - y;
// console.log(result2);

// result3 = x * y;
// console.log(result3);

// result4 = x / y;
// console.log(result4);

// result5 = x % y;
// console.log(result5);
// console.log("===============")

// //----
// // 등호 연산자
// /**
//  * x += 5; // x = x + 5
//  * x -= 5; // x = x - 5
//  * x *= 5; // x = x * 5
//  */

// //----
// // 일치 연산자  vs 등등연산자
// console.log(2 === "2"); // false
// console.log(2 == "2");  // true

console.log("===============")
const isMan = true;

if (!isMan) {
    console.log("I'm a woman.");
} else {
    console.log("I'm a man.");
}

console.log("===============")

//----
// logical AND (&&)
const bool3 = true;
const bool4 = true;
const result6 = bool3 && bool4; // true
console.log(result6);

const bool5 = false;
const bool6 = true;
const result7 = bool5 && bool6; // false
console.log(result7);

const bool7 = true;
const bool8 = false;
const result8 = bool7 && bool8; // false
console.log(result8);

const bool9 = false;
const bool10 = false;
const result9 = bool9 && bool10; // false
console.log(result9);

console.log("===============")

// logical OR ()
const bool11 = true;
const bool12 = true;
const result10 = bool11 || bool12; // true
console.log(result10);

const bool13 = true;
const bool14 = false;
const result11 = bool13 || bool14; // true
console.log(result11);

const bool15 = false;
const bool16 = true;
const result12 = bool15 || bool16; // true
console.log(result12);

const bool17 = false;
const bool18 = false;
const result13 = bool17 || bool18; // false
console.log(result13);

console.log("===============")

//----
// Function : name , input(parameter=매개변수), output

// 함수 선언문
// function functionName(input1, input2, input3) {
//     // 어떠한 동작 1

//     // 어떠한 동작 2

//     // 어떠한 동작 3

//     return output
// }

// 함수 표현식
// const functionName = function (input1, input2, input3) {
//     // 어떠한 동작 1

//     // 어떠한 동작 2

//     // 어떠한 동작 3

//     return output
// }

// 두 개의 숫자를 입력받으세요.
function sum(x, y) {
    // 두 개의 숫자를 더해요.
    const sumResult = x + y;

    // 더한 결과를 내보내요.
    return sumResult;
}

result = sum(1, 2);
console.log(result);
