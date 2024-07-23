// 형 변환
// 형태 -> 바꾼다
// 명시적 형 변환, 암시적 형 변환

// 1. 암시적
// 1-1. 문자열
let result1 = 1 + "2";
console.log(result1);   // 12 반환
console.log(typeof result1);    // string 반환


let result2 = 1 + true;
console.log(result2);   //  2 반환
console.log(typeof result2);    // number 반환

// {}, null, undefined + "1" => 문자열

// 1-2. 숫자
let result3 = 1 - "2";
console.log(result3);   // -1 반환
console.log(typeof result3);    // number 반환

let result4 = "2" * "3";
console.log(result4);   // 6 반환
console.log(typeof result4);    // number 반환


// 2. 명시적 형 변환
// 2-1. Boolean
// 어떠한 타입으로 형 변환을 하겠다라고 명시해야 함
console.log(Boolean(0));    // 0 이라는 값을 Boolean타입으로 변환하겠다
console.log(Boolean(""));   // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined));    // false
console.log(Boolean(NaN));   // false
console.log('-------------------');
console.log(Boolean("false"));  // true: ""안에 들어가있는 문자열이므로 true 반환
console.log(Boolean({}));   // true: 객체는 값이 비어있더라도 true 반환


// 2.2 문자열
let result5 = String(123);
console.log(typeof result5);    // string
console.log(result5);           // "123"

let result6 = String(true);
console.log(typeof result6);    // string
console.log(result6);           // "true"

let result7 = String(false);
console.log(typeof result7);    // string
console.log(result7);           // "false"

let result8 = String(null);
console.log(typeof result8);    // string
console.log(result8);           // "null"

let result9 = String(undefined);
console.log(typeof result9);    // string
console.log(result9);           // "undefined"

// 2.3 숫자
let result10 = Number("123");
console.log(result10);          // number
console.log(typeof result10);   // 123

console.log(Number(""));        // 0
console.log(Number("  "));      // 0
console.log(Number(true));      // 1
console.log(Number(false));     // 0