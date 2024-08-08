// --------------------  화살표 함수 --------------------
const add1 = function (a, b) {
  return a + b;
};

console.log(add1(1, 3)); // 4

// 첫 번째 방법
const add2 = (a, b) => {
  return a + b;
};
console.log(add2(1, 3)); // 4

// 두 번째 방법: 리턴문이 한 줄일 경우 {}와 return을 빼고 사용 가능
const add3 = (a, b) => a + b;
console.log(add3(1, 3)); // 4

//-------------------- 조건 연산자 = 삼항연산자 --------------------
const score1 = 85;
let grade1 = "";

if (score1 >= 80) {
  grade1 = "A";
} else {
  grade1 = "B";
}
console.log(grade1); // A

// 아래와 같이 변경 가능, 처음 값 할당할 때 아예 A나 B를 할당해버리기 때문에 변수let이 아닌 상수 const로 표현가능
const grade2 = score1 >= 80 ? "A" : "B"; // score2가 80보다 같거나 크니? 같으면 A를 그게 아니면 B를 반환해줘
console.log(grade2); // A

// -------------------- 단축 평가 --------------------

// (1) 논리합연산자(||)
// truthy, falsy
// falsy: false, 0, "", null, undefined, NaN

const getUserName1 = (user) => {
  if (!user.name) {
    // user.name이 falsy한 값일 경우
    return "신원미상";
  }
  return user.name;
};

const person = {
  age: 30
};
console.log(getUserName1(person)); // 신원미상 출력

// 아래와 같이 표현식 사용 가능: user.name이 falsy한 값일 경우 "신원미상" 출력
const getUserName2 = (user) => {
  return user.name || "신원미상";
};
console.log(getUserName2(person)); // 신원미상 출력

// 아래와 같이 줄일 수 있음: 리턴문이 하나이기 때문에 중괄호{}와 return 키워드 생략 가능
const getUserName3 = (user) => user.name || "신원미상";
console.log(getUserName3(person)); // 신원미상 출력

// (2) 논리곱연산자(&&)
const loggedIn = true;
const userName = "르탄이";

// 좌변이 truthy일 때만 &&의 우변을 실행한다.
loggedIn && console.log(`환영합니다. ${userName}님!`);

// optional chaning
const user = {
  profile: {
    name: "르탄이",
    details: {
      age: 30,
      location: "서울시 강남구"
    }
  },
  printHello: () => console.log("Hello")
};

console.log(user.profile.details.age); // 30 출력
// console.log(user.profile2.details.age); // 오류: Cannot read properties of undefined (reading 'details')
console.log(user.profile2?.details.age); // undefined 출력
user.printHello(); // Hello 출력

user.printHello1?.(); // 아무것도 출력하지 않고 끝남

const result = user.printHello1?.();
console.log(result); // undefined 출력

// (3)  Null 병합 연산자(??): 좌변이 null이나 undefined일 때만 우변을 평가함
let userLocation = null;
console.log(userLocation ? userLocation : "없는위치"); //  없는위치 출력

// 동일한 표현을 같이 쓰는게 의미가 없기 떄문에 좌측의 userLocation이 존재하면 보여주고 존재하지 않으면 연산자 ??의 우측을 보여줌)
console.log(userLocation ?? "없는위치"); //  없는위치 출력

// 다른 예제
function displayPreferences(preferences) {
  // `||` 연산자 사용 예
  // 좌측의 preferences.textLength의 값이 0으로 되있었으나, 0은 falsy한 값이기 떄문에 우측이 평가되어 50이 나옴
  const textLength = preferences.textLength || 50; // textLength가 0일 경우 50이 할당 됨
  console.log(`Text Length: ${textLength}`); // Text Length: 50 출력

  // `??` 연산자 사용 예
  // 좌측의 preferences.itemsPerPage가 null 또는 undefined일 때만 우측을 평가하기 때문에 10이 할당 됨
  const itemsPerPage = preferences.itemsPerPage ?? 10; // itemsPerPage가 null 또는 undefined일 때만 10이 할당됨
  console.log(`Items Per Page: ${itemsPerPage}`); // Items Per Page: 10 출력
}

// 테스트 케이스
const userPreferences = {
  textLength: 0, // 0이 유효한 값이지만 || 연산자로 인해 50이 출력됨
  itemsPerPage: null // null 값에 대해 ?? 연산자로 인해 10이 출력됨
};

displayPreferences(userPreferences);
