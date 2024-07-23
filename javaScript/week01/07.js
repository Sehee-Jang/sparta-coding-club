// 함수

// 1. 함수 선언문
function add(매개변수) {
    //함수 내부에서 실행할 로직
}


function add(x, y) {
    return x + y;
}

console.log(add(2, 3));   // 5

// 2. 함수 표현식
let add2 = function(x,y){
    return x + y;
}

// 함수 호출하기
// 함수명 () -> add(입력값)

// 방법 1
add(2,3);
console.log(add(2,3));

// 방법 2
let functionResult = add(3,4); // functionResult 변수 선언 후 함수 호출 add(2,3)
console.log(functionResult); // 할당 받은 값을 출력

// 연습
console.log(add2(10,20));
let functionResult2 = add2(10,20);
console.log(functionResult2);