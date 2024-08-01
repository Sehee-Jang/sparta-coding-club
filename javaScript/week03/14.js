// bind 메서드
// -> this를 바인딩하는 메서드
// call, apply와는 좀 달라요! 즉시 호출하진 않고 해당 하는 함수를 this바인딩해서 새로운 함수를 리턴함

// [목적]
// 1. 함수에 this를 '미리' 적용
// 2. 부분 적용 함수

var func = function (a, b, c, d) {
    console.log(this, a, b, c, d); // { x: 1 } 5 6 7 8
}
func(1, 2, 3, 4);

// 함수에 this를 미리 적용
var bindFunc1 = func.bind({ x: 1 }); // bindFunc 는 this 라는 값이 x=1로 고정
bindFunc1(5, 6, 7, 8);

// 부분 적용 함수
var bindFunc2 = func.bind({ x: 1 }, 4, 5); // 뒤에 4, 5를 미리 선점
bindFunc2(6, 7); // bindFunc2를 호출할 때 원래는 4개의 인자가 필요한데 2개만 넣어주면 됨