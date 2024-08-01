var numbers = [10, 20, 3, 16, 45];
var max = min = numbers[0]; //10

numbers.forEach(function (number, idx) {
    console.log(idx + '번째 값: ' + number);
});

numbers.forEach(function (number) {
    // 현재 돌아가는 숫자가 max보다 큰 경우
    if (number > max) {
        max = number;
    }
    // 현재 돌아가는 숫자가 min 작은 경우
    if (number < min) {
        min = number;
    }
});

console.log(max, min);

//가독성도 안좋고 코드가 길다는 단점이 있음: 13.js 로 