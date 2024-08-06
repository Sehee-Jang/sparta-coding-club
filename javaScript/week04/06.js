// obj
// 2가지 속성: val 배열을 가짐, logValues 함수를 가짐
var obj = {
    vals: [1,2,3],
    logValues: function (v, i) {
        console.log('>> Test Starts');
        if (this === global) {
            console.log('this가 global입니다. 원하지 않는 결과!')
        } else { 
            console.log(this, v, i);
        }
        console.log('>>> Test Ended.')
    },
};

// method로써 출력
// obj.logValues(1, 2);

// forEach, map, filter
// 첫 번째 인자: 기준이 되는 배열의 n번째 요소
// 두 번째 인자: 그 요소의 인덱스
[4, 5, 6].forEach(obj.logValues); 


// forEach의 매개변수로 함수자체를 넣은게 아니라 메서드를 넣었다고 생각할 수 있으나,
// 메서드를 넣은 게 아니라 아래와 같이 메서드의 형태처럼 보이는 함수 자체를 넣은 것
[4, 5, 6].forEach(function (v, i) {
        console.log('>> Test Starts');
        if (this === global) {
            console.log('this가 global입니다. 원하지 않는 결과!')
        } else { 
            console.log(this, v, i);
        }
        console.log('>>> Test Ended.')
    }); 