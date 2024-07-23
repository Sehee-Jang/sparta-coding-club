// 조건부 실행
let x = 10;

//  AND 조건 (&&)
// 방법 1
if (x > 0) {
    onsole.log("x는 양수입니다.");
}

// 방법 2 : 요즘 스타일
(x > 0) && console.log("x는 양수입니다.");

// OR 조건 (||)
// 삼항 연산자와 단축 평가
let a;  //  선언만 하고 값을 할당 하지 않은 상태: y = undefined
let b = a || 10;

console.log(b);   // 10