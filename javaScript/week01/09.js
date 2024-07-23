// 스코프: 지역변수
function printX() {
    let x = 10; //  함수 내부에서 선언이 된 변수 (지역변수)
    console.log(x);
}

console.log(x); // 여기서는 호출할 수 없음 -> 오류 발생
printX();