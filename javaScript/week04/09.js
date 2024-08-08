// 비동기적 코드의 이해
setTimeout(function () { 
    console.log('2. 여기는 나중에 실행 됨')
}, 1000);
console.log('1. 여기가 먼저 출력 됨');
