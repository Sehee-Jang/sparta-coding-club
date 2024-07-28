// Set
// 고유한 값을 저장하는 자료 구조
// 값(value)만 저장한다.
// key를 저장하지는 않는다.
// 값이 중복되지 않는 유일한 요소로만 구성된다.
// 값 추가, 검색, 값 삭제, 모든 값 제거, 존재 여부 확인

// Set 생성
const mySet = new Set();

// 추가
mySet.add("value1");
mySet.add("value2");
mySet.add("value2");    // 중복된 값은 추가 되지 않음
mySet.add("value3");
mySet.add("value5");
mySet.add("value8");

// Set의 사이즈(길이) 확인
console.log(mySet.size);    // 6이 아닌 5

// Set에 특정 값이 존재하는지 여부 확인
console.log(mySet.has("value1"));   // true
console.log(mySet.has("value2"));   // ture
console.log(mySet.has("value3"));   // false

// Iterator 반복
for (const value of mySet.values()) {
    console.log(value);
}