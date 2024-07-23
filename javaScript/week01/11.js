// 조건문
// 1. if
let x = 10;

// 1-1
if (x > 0) {
    console.log("x는 양수입니다.");
}

// 1-2
let y = "hello world";

if (y.length >= 5) {
    console.log(y);
}

// 2. if-else
let z = -3;
if (z > 0) {
    console.log("z는 양수입니다.");
    // main logic #1
} else {
    console.log("z는 음수입니다.");
    // main logic #2
}

// 1-3. if-else if-else
let a = 10;
if (a < 10) {
    console.log("1");
} else if (a >= 0 && a < 10) {
    console.log("2");
} else {
    console.log("3");
}

// 1-4. switch
// 변수의 값에 따라, 여러 개의 경우(case) 중 하나를 선택
// default
let fruit = "사과";

switch (fruit) {
    case "사과":
        console.log("사과입니다.");
        break; // case가 끝날 때 break문을 같이 넣어줘야 함. 그래야 실행 후 빠져 나옴
    case "바나나":
        console.log("바나나입니다.");
    case "키위":
        console.log("키위입니다.");
    default:
        console.log("아무것도 아닙니다.")
    
}