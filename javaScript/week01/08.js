// 스코프: 전역변수
let x = 10; //  전체 영역에서 선언이 된 변수 x

function printX() {
    console.log(x); // 함수 내부에서도
}

console.log(x); // 함수 밖에서도 호출이 가능함
printX();
