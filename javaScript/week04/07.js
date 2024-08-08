// [콜백 함수 내부의 this에 다른 값 바인딩하기]
// 콜백 함수 내부에서 this가 문맥에 맞는 객체를 바라보게 할 수는 없을까?
// 콜백 함수 내부의 this에 다른 값을 바인딩 하는 방법

var obj1 = {
    name: "obj1",
    func: function () { 
        var self = this; // 이 부분
        return function () {
            console.log('------------출력 결과 1------------')
            console.log(self.name); // obj1 출력
        };
    },
};

var callback = obj1.func(); // 변수 callback에 obj1.func함수를 실행한 결과를 담음
setTimeout(callback, 1000);

// -- 위의 코드와 같은 로직
// var callback = function () {
//     console.log(self.name);
// };
// setTimeout(function () {
//     console.log(self.name);
// }, 1000);



// 2 -- this의 장점을 놓친 결과만을 위한 코딩 => 하드코딩... 완전 10/100점짜리 코드로 지양해야 함
var obj2 = {
    name: "obj2",
    func: function () { 
        console.log('------------출력 결과 2------------')
        console.log(obj2.name);
    },
}
setTimeout(obj2.func, 1000);


// 3 -- 조금 더 효율적인 코드
var obj3 = {
    name: "obj3",
    func: function () { 
        var self = this; // 이 부분
        return function () {
            console.log('------------출력 결과 3------------')
            console.log(self.name); // obj4 출력
        };
    },
};

var obj4 = {
    name: "obj4",
    func: obj3.func,
};

// -- 위의 obj4와 같은 코드
// var obj4 = {
//     name: "obj4",
//     func: function () { 
//         var self = this; // 이 부분
//         return function () {
//             console.log('------------출력 결과 3------------')
//             console.log(self.name); // obj4 출력
//         };
//     },
// };

var callback4 = obj4.func();
setTimeout(callback4, 1500);

var obj5 = { name: "obj5" };
var callback5 = obj3.func.call(obj5); // obj5 출력 
setTimeout(callback5, 2000);

// -- 위의 obj5와 같은 코드
// var obj5 = { name: "obj5" };
// var callback5 = function () { 
//         var self = this; // 이 부분
//         return function () {
//             console.log('------------출력 결과 5------------')
//             console.log(self.name); // obj5 출력
//         };
//     }.call(obj5);
// setTimeout(callback5, 2000);