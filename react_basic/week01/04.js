// ------------------- 객체
const user = {
  name: "르탄이",
  age: 30,
  isAdmin: true
};

// (1) Object.keys()
const keys = Object.keys(user);
console.log(keys); // [ 'name', 'age', 'isAdmin']

// (2) Object.values()
const values = Object.values(user);
console.log(values); // [ '르탄이', 30, true ]

// (3) entries
const entries = Object.entries(user);
console.alo;

// (4) assign: 원본 객체에 추가적인 객체의 속성을 복사
const userDetails = {
  occupation: "개발자"
};

Object.assign(user, userDetails); // user에 userDetails을 합침
console.log(user);
userDetails;

// ------------------- 배열
const fruit = ["Apple", "Banana"];
console.log(fruit);

// orange를 추가
fruit.push("Orange");
console.log(fruit);

// orange를 빼기
const lastFruit = fruit.pop();
console.log("Last fruit: ", lastFruit);
console.log("Fruit: ", fruit);

// -------------------map: 원본 배열에서 각 요소를 가곡항 새로운 배열을 리턴하는 함수
// 1) 배열 내의 모든 요소 각각에 대해
// 2) 주어진 함수를 호출한 결과를 모아
// 3) 새로운 배열을 반환

const numbers1 = [1, 2, 3, 4, 5];
const squared = numbers1.map(function (num) {
  return num * num; // 원본배열의 갯수만큼 돌아 리턴함, 리턴문이 없으면 undefined를 할당
});

console.log(squared); // [ 1, 4, 9, 16, 25 ] 출력

// ------------------- filter: 주어진 함수의 테스트를 통과하는 모든 요소를 새로운 배열로 만듬
const evenNumbers = numbers1.filter(function (num) {
  return num % 2 === 0; //  나머지가 0 인 값
});

console.log(evenNumbers); //   [ 2, 4 ] 출력

const 동영상리스트 = [
  {
    아이디: 1,
    제목: "동영상01",
    썸네일이미지: "image01.jpg"
  },
  {
    아이디: 2,
    제목: "동영상02",
    썸네일이미지: "image02.jpg"
  },
  {
    아이디: 3,
    제목: "동영상03",
    썸네일이미지: "image03.jpg"
  },
  {
    아이디: 4,
    제목: "동영상02",
    썸네일이미지: "image04.jpg"
  }
];

const 필터링된동영상리스트 = 동영상리스트.filter(function (영상) {
  return 영상.제목 === "동영상02";
});
console.log(필터링된동영상리스트);

// ------------------- reduce: 배열의 각 요소에 대해 주어진 함수를 실행하고 결과물을 누적해서 반환 (매개변수 2개를 받음)
const result = numbers1.reduce(function (누적된값, 일반값) {
  console.log("------");
  console.log(누적된값);
  console.log(일반값);

  return 누적된값 + 일반값; // 이 값이 누적된 값으로 들어감
});

console.log("result => ", result);

// ------------------- sort: 정렬을 위한 함수, 원본 배열 자체를 바꿈
const fruits = ["Banana", "Mango", "Orange", "Apple"];
console.log(fruits); // [ 'Banana', 'Mango', 'Orange', 'Apple' ]
fruits.sort();
console.log(fruits); // [ 'Apple', 'Banana', 'Mango', 'Orange' ]

const numbers2 = [40, 100, 1, 5, 25];
numbers2.sort();
console.log(numbers2); // [ 1, 100, 25, 40, 5 ] => sort()안에 아무 값도 안넣어주어 문자열로 인식 비교함.

// 비교함수를 넣어주어야 함
numbers2.sort(function (a, b) {
  return a - b;
});

console.log(numbers2); // [ 1, 100, 25, 40, 5 ] => 오름차순

numbers2.sort(function (a, b) {
  return b - a;
});

console.log(numbers2); // [ 100, 40, 25, 5, 1 ] => 내림차순
