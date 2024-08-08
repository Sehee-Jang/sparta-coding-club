//---------------------- Template Literals
// : 변수와 표현식을 문자열 안에 쉽게 삽입할 수 있게 해주는 문법  ``
const customer = {
  name: "르탄이"
};

const item = {
  name: "커피",
  price: 4000
};

// 템플릿 리터럴 사용 전
console.log("감사합니다. " + customer.name + "님!" + item.name + "을(를)" + item.price + "원에 구매하셨습니다.");

// 템플릿 리터럴 사용 후
console.log(`감사합니다. ${customer.name}님! ${item.name}을(를 ${item.price}원에 구매하셨습니다.`);

// 템플릿 리터럴 사용 전
const orderDetails1 = "고객: " + customer.name + "\n" + "상품: " + item.name + "\n" + "가격: " + item.price;
console.log(orderDetails1);

// 템플릿 리터럴 사용 후
const orderDetails2 = `
고객: ${customer.name}
상품: ${item.name}
가격: ${item.price}
`;
console.log(orderDetails2);

//----------------------  Destructuring
// De: not
// Structuring: 구조
const item2 = {
  name: "커피",
  price: 4000
};

// Destructuring 전
// const name = item2.name;
// const price = item2.price;
// console.log("name => ", name);
// console.log("price => ", price);

// Destructuring 후
// 위와 같이도 가능하나, 만약 해야할 작업이 5만개라면....
const { name, price } = item2; // item2로부터 name, price를 찢어 놓겠다.
console.log("name => ", name);
console.log("price => ", price);

// 또 다른 예
function greet(person) {
  console.log(`안녕하세요. 제 이름은 ${person.name}입니다. 나이는 ${person.age}이에요.`);
}

const person = {
  name: "르순이",
  age: 28
};

greet(person);

// 위와 같은 코드를 아래와 같이 Destructuring할 수도 있음
function greet(name, age) {
  console.log(`안녕하세요. 제 이름은 ${name}입니다. 나이는 ${age}이에요.`);
}

// 배열의 Destructuring: 배열은 key가 없기때문에 Index(요소의 위치)를 기반으로 변수를 할당한다.
const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors; // colors로부터 firstColor, secondColor를 지정함
console.log(firstColor); //  red
console.log(secondColor); //  green

// 만약 blue만 필요하다면
const [, , thirdColor] = colors; // 첫번째 두번째 요소는 아무것도 하지 않고 세번째만 저장한다.
console.log(thirdColor); // blue

//----------------------  Spread Operators
