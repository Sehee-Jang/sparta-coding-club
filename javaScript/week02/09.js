const myMap = new Map();

// myMap에 set으로 데이터 저장
myMap.set('one', 1);
myMap.set('two', 2);
myMap.set('three', 3);

console.log(myMap.keys());  // [Map Iterator] { 'one', 'two', 'three' }

// for (const 변수명 of myMap.keys()) {
//     console.log(변수명);
// }

for (const key of myMap.keys()) {
    console.log(key);
}

for (const value of myMap.values()) {
    console.log(value);
}

// 배열로로 묶어서 전체를 Iterator로 감싸서 출력함
console.log(myMap.entries());   // [Map Entries] { [ 'one', 1 ], [ 'two', 2 ], [ 'three', 3 ] }

for (const entry of myMap.entries()) {
    console.log(`${entry[0]}: ${entry[1]}`);
}

// Map의 크기와 존재여부를 확인하는 방법

// Map의 사이즈(길이) 확인
console.log(myMap.size); // 3 출력

// Map에 특정 key가 존재하는지 여부 확인
console.log(myMap.has('two')); // true 출력