const obj1 = {
    name: "test",
    age: 21,
}

console.log(obj1.name);
console.log(obj1['age']);

const fruit = ['apple', 'banana'];

fruit.push('lemon'); // 배열의 제일 뒤에 추가
console.log(fruit);

fruit.push('melon');
console.log(fruit);

// fruit.pop();
// console.log(fruit);
const test = fruit.pop();
console.log(fruit);
console.log(test);

const arr = [30, 1, 2, 5, 40];
// 100을 넣기
arr.push(100);
// 넣은 100을 빼내서 (pop) 변수에 할당하기
const test2 = arr.pop();
// 할당한 100을 콘솔로그로 출력하기
console.log(test2);

console.log('-------------for------------')

for (i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}

// forEach : for문과 동일
// array.forEach(함수가 매개변수로 들어감);
fruit.forEach(function () {
    console.log(1); // fruit의 길이만큼 실행됨
});

const data = [
    {
        id: 1,
        name: "John",
        age: 21,
    },
    {
        id: 2,
        name: "Amy",
        age: 18,
    },
    {
        id: 3,
        name: "Emily",
        age: 28,
    },
]

// 1. forEach는 배열의 메서드다.
// 2. 배열 메서드는 input(매개변수)를 받는다.
// 3. 그 매개변수는 함수다(매개변수로 들어오는 함수 = 콜백함수)
// 4. 그 매개변수로 들어온 함수는 input(매개변수)를 갖는다.
// 5. 그 매개변수에는 호출의 주체가 된 배열의 각 요소가 차례때로 할당됨

data.forEach(function (testValue) {
    console.log(testValue);
});

// 이름만 출력
console.log('이름만 출력: ')
data.forEach(function (testValue) {
    console.log(testValue.name);
});

// 화살표 함수 사용
data.forEach(testValue => {
    console.log(testValue.name);
});

//나이가 25살 이상인 경우에만 이름 출력
console.log('나이가 25살 이상인 경우에만 출력: ')
data.forEach(function (obj) {
    if (obj.age > 25) {
        console.log(obj.name);
    }
})