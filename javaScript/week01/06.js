// 연산자 (+, -, *, /, %)

// 1. 더하기
console.log(1 + 1);     // 2
console.log(1 + "1");   // 11

// 2. 빼기
console.log(1 - "2");   // -1
console.log(1 - 2);     // -1

// 3. 곱하기
console.log(2 * 3);     // 6
console.log("2" * 3);   // 6

// 4. 나누기
console.log(4 / 2);     // 2
console.log("4" / 2);   // 2

// 5. 나누기 vs 나머지 연산자 (%)
console.log(5 / 2);     // 2.5
console.log(5 % 2);     // 1

// 6. 할당 연산자
// 6-1. 등호 (=)
let x = 10;
console.log(x);

// 6-2.더하기 등호 (+=)
x += 5; // x = x + 5 와 같음
console.log(x);

// 6-3. 빼기 등호 (-=)
x -= 5;
console.log(x);

// 6-4. 곱하기 등호 (*=)
let a = 10;
a *= 2;
console.log(a);

// 6-5. 나누기 등호(/=)
let b = 10;
console.log(b);   // 10

b %= 3;
console.log(b);   // 1

// 삼항 연산자
let c = 10;
let result = (c > 5) ? "크다" : "작다";
console.log("-----------");
console.log(result);