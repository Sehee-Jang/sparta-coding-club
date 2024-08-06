Array.prototype.map123 = function (callback, thisArg) {
    console.log("hello");
    // map함수에서 return할 결과 배열
    var mappedArr = [];

    // this는 호출주체 [1, 2, 3]를 가르킴
    for (var i = 0; i < this.length; i++) {
        var mappedValue = callback.call(thisArg || global, this[i]); // 만약 thisArg가 들어왔으면 thisArg를 쓰고 아니면 global, 그리고 두번째 인자로 this의 i번째를 넣어라
        mappedArr[i] = mappedValue; // mappedValue를 mappedArr의 i번째에 넣어라
    }

    return mappedArr;
}

var newArr = [1, 2, 3].map123(function (number) { 
    return number * 2;
});

console.log(newArr);    // [ 2, 4, 6 ]