// Destructuring

// 문제 1
// 다음 자바스크립트 객체에서 name과 age를 디스트럭처링을 사용하여 추출하고 출력하는 코드를 작성하세요.
const person = {
  name: "르탄이",
  age: 25,
  job: "개발자"
};

const { name, age } = person;
console.log(`안녕하세요. ${name}님, 당신은 ${age}살입니다.`);

// 문제2
// 다음 자바스크립트 객체에서 title과 year를 디스트럭처링을 사용하여 추출하고 출력하는 코드를 작성하세요.
const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  release: {
    year: 2010,
    month: "July"
  }
};

// year은 구조분해 할당을 한 번더 해야함
const {
  title,
  release: { year }
} = movie;
console.log(`영화의 제목은 ${title} / ${year}입니다.`);

// 문제3
// 다음 자바스크립트 배열에서 첫 번째와 세 번째 요소를 디스트럭처링을 사용하여 추출하여 first, third 변수에 담아 출력하는 코드를 작성하세요.
const numbers = [10, 20, 30, 40, 50];

const [firstNumber, , thirdNumber] = numbers;
console.log(firstNumber);
console.log(thirdNumber);

// 문제4
// 호텔의 예약 확인 시스템의 함수라고 가정합니다. 아래 결과와 같이 출력되도록 함수를 완성해 보세요.
function confirmReservation(user) {
  // 여기에 user 객체를 구조 분해 할당 하세요.
  const { name, roomType, date: firstDate } = userInfo;
  return `${name} 고객님의 ${roomType}룸 입실날짜는 ${firstDate} 입니다.`;
}

const userInfo = {
  name: "James",
  roomType: "Deluxe",
  date: "2023-05-30"
};
const result = confirmReservation(userInfo);
console.log(result);
