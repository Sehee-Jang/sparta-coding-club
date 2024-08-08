//---------------------- Template Literals ----------------------
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

//----------------------  Destructuring ----------------------
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

//----------------------  Spread Operators ----------------------

// (1) 복제
const originalUser = {
  name: "르탄이",
  age: 28
};

// 참조하는 위치를 복사한 것일 뿐 updatedUser에 originalUser가 복사된 것이 아님
const updatedUser = originalUser;
updatedUser.name = "르순이";
console.log("원본 =>", originalUser); // 원본 => { name: '르순이', age: 28 }
console.log("복사본 =>", updatedUser); // 복사본 => { name: '르순이', age: 28 }

// 원본까지 르순이로 변경됨: 불변성이 깨지는 현상

const updatedUser2 = { ...originalUser }; // originalUser ...으로 찢어놓음 -> 중괄호{}가 벗겨지기 때문에 다시 중괄호를 씌움

// (2) 배열이나 객체를 합칠 때도 사용 가능
const first = [1, 2, 3];
const second = [4, 5, 6];
const combinedArray = [...first, ...second]; // [1, 2, 3, 4, 5, 6]
console.log(combinedArray);

// 문제
// 다음 두 객체 obj1과 obj2가 주어졌을 때, 두 객체의 속성을 스프레드 연산자를 사용하여 병합한 새 객체 mergedObj를 생성하고 결과를 출력하세요.
// 단, 같은 이름의 키가 존재할 경우 obj2의 값이 우선하여 반영되어야 합니다. 또한, mergedObj에서 name 속성의 값을 '원장님'으로 변경 후, 원본 객체 obj1과 obj2가 변경되지 않는 것을 확인하세요.
const obj1 = { name: "르탄이", age: 25 };
const obj2 = { name: "르순이", email: "rsoony@sparta.com" };

const mergedObj = { ...obj1, ...obj2 }; // { name: '르순이', age: 25, email: 'rsoony@sparta.com' } 출력 => 합쳤을 때 키가 중복된다면 뒤의 객체가 앞의 객체를 덮어씀
// const mergedObj = { ...obj2, ...obj1 }; // { name: '르탄이', email: 'rsoony@sparta.com', age: 25 }
console.log(mergedObj);

mergedObj.name = "원장님";
console.log(obj1); // { name: '르탄이', age: 25 }
console.log(obj2); // { name: '르순이', email: 'rsoony@sparta.com' }
// => 원장님으로 바꾸었지만 obj1과 obj2는 영향을 받지않음: 불변성을 유지

//----------------------  Rest Operators ----------------------
// : 나머지 값을 활용해서 어떤 연산을 하는 프로세스, Spread Operators와 비슷하다

// ...변수명
// 언제사용?
// 1) 함수의 매개변수
// 2) 객체분해할당 시 여러값을 그룹핑

// 함수의 매개변수
function sum(numbers) {
  return numbers.reduce((acc, cur) => acc + cur);
}
const result1 = sum([1, 2, 3, 4, 5]);
console.log(result1); // 15

// 아래와 같이 쓸 수 있으나 귀찮음
// function sum(first, second, third, fourth, fifth) {
//   return;
// }
// const result2 = sum(1, 2, 3, 4, 5);

function sum(...numbers) {
  console.log("Here => ", numbers); // Here =>  [ 1, 2, 3, 4, 5 ] 배열의 형태로 반환
  return numbers.reduce((acc, cur) => acc + cur);
}
const result3 = sum(1, 2, 3, 4, 5); // 배열을 넣은 적이 없으나 ... rest operator에 의해서 배열로 반환됨
console.log(result3); // 15

// 객체 분해 할당 시 여러값 그룹핑
const person2 = {
  name: "John",
  age: 30,
  country: "USA",
  occupation: "Developer"
};

// occupation을 제외한 name, age, country만 하나의 객체의 담고 싶다면,
const { occupation, ...rest } = person2;
console.log("rest = > ", rest); // rest = >  { name: 'John', age: 30, country: 'USA' }
