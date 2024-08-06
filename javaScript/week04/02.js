// ----- setInterval
// ----- (1)
// 반복해서 매개변수로 받은 콜백함수의 로직을 수행
var count = 0;

// timer를 setInterval로 지정을 하겠다. 매개변수로 함수가 들어옴
var timer = setInterval(function () { 
    // count를 출력함
    console.log(count);
    // 출력 후 ++한 count가 4보다 크면, timer를 clearInterval해라
    if (++count > 4)  clearInterval(timer); // ++count === 5
}, 300); // 0.3초 간격으로 로직을 반복

// 0.3초 간격으로 0부터 시작해 1,2,3,4까지 출력
// ++count가 5가 되니 clearInterval이 되면서 로직이 빠져나감


// ----- (2): 1번과 같은 로직이나 훨씬 더 보기쉬움
var cbFunc = function () { 
    // count를 출력함
    console.log(count);
    // 출력 후 ++한 count가 4보다 크면, timer를 clearInterval해라
    if (++count > 4)  clearInterval(timer); // ++count === 5
}

var timer = setInterval(cbFunc, 300); 