// let과 const는 블록스코프로 안전한 프로그래밍이 가능: 선언된 블록 내에서만 접근할 수 있음
let blockScopeVariable = "Abailable only in this block";
if (true) {
  let blockedScope = "Visible inside this block";
  console.log(blockedScope);
}
// console.log(blockedScope); //  오류: blockedScope is not defined
console.log(blockScopeVariable);

// const vs let을 잘 고르는 팁!
// const를 먼저 떠올리고 만약 변경될 여지가 있다면 그때 let
function testFunction() {
  var test = "any words";
  if (true) {
    var test = "changed value";
  }
  console.log(test); // changed value 출력
}
testFunction();

// console.log(testValue1); // 오류: Cannot access 'testValue' before initialization
// const testValue1 = "hello world";

console.log(testValue2); // var는 호이스팅이 가능하기 때문에 만들지 않은 변수임에도 불구하고 실행 됨
var testValue2 = "hello world";
