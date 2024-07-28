// 일급 객체로서의 함수 (2)

// (5)  배열의 요소로 함수를 할당
const myArr = [
    function (a, b) {
        return a + b
    }, function (a, b) {
        return a - b
    }
]

// function은 ()로 실행하는데 function에 접근하기 위해 배열의 요소를 접근하는 방법 그대로 접근

// 더하기
console.log(myArr[0](1, 3));    // 4

// 빼기
console.log(myArr[1](10, 7));   // 3