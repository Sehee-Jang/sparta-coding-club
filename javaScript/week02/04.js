// 일급 객체로서의 함수 (1)

// (1) 변수에 함수를 할당할 수 있다.
/**
 * 함수가 마치 값으로 취급된다.
 * 함수가 나중에 사용될 수 있도록 조치가 되었다.
 */
// const sayHello = function () {
//     console.log("Hello!");
// }

// (2) 함수를 인자로 다른 함수에 전달할 수 있다.
/**
 * (2)-1. 콜백 함수: 매개변수로서 쓰이는 함수
 * (2)-2. 고차 함수: 함수를 인자로 받거나 return하는 함수
 * 콜백함수(함수로 인자로 받음)는 고차함수의 한 종류
 */
function callFunction(func) {
    //매개변수로 받은 변수 func가 사실 함수다.
    func()
}

const sayHello = function () {
    console.log("Hello!");
}

callFunction(sayHello); //callFunction을 실행할 때, sayHello 함수를 매개변수로 던질 수 있음

callFunction(function () {  // callFunction(func)에서 매개변수 func로 sayHello라고 저장된 함수가 func로 전달됨
    console.log("Hello!");
});

// function callFunction(function () {
//     console.log("Hello!");
// }) {
//     //매개변수로 받은 변수 func가 사실 함수다.
//     func()
// }

// (3) 함수를 반환할 수 있다.
function createAdder(num) {
    return function (x) {
        return x + num;
    }
}

const addFive = createAdder(5); // createAdder를 실행한 결과
// 다음과 같이 대체 됨
// const addFive = function (x) {
//     return x + 5;
// }

console.log(addFive(10)); // addFive를 실행한 결과
// 다음과 같이 대체 됨
// console.log(function (10) {
//     return 10 + 5;
// });

