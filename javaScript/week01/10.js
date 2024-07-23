// 화살표 함수
function add(x, y) {
    return x + y;
}

// 1-1. 기본적인 화살표 함수
let arrowFunc01 = (x, y) => {
    return x + y;
}

// 1-2. 한줄로 (중괄호{} 안에 있는 return문이 한 줄일 경우만 중괄호와 return 키워드 생략 가능)
let arrowFunc02 = (x, y) => x + y;

// 1-3. 매개변수가 하나인 화살표 함수
function testFunc(x) {
    return x;
}

let arrowFunc03 = x => x;