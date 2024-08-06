// ----- map
var newArr = [10, 20, 30].map(function (currentValue, index) {
    console.log(currentValue, index);   // 10 0, 20 1, 30 2
    return currentValue + 5;
});

// 리턴문이 없을 때 결과: map 함수는 무조건 배열의 크기만큼 무엇인가를 할당해야하는데, 리턴이 없기 때문에 undefined를 할당함
console.log(newArr);    // [ undefined, undefined, undefined ]

// return currentValue + 5;
console.log(newArr);    // [ 15, 25, 35 ]

// currentValue, index을 index,currentValue로 변경했을 경우
var newArr = [10, 20, 30].map(function (index, currentValue) {
    console.log(index, currentValue);   // 10 0, 20 1, 30 2
    return currentValue + 5;
});
console.log(newArr);    // currentValue + 5 값이 [5, 6, 7] 나옴
// current가 아닌 index에 더해짐
// index나 currentValue는 사람이 이해할 수 있는 변수 명일 뿐