// 객체: key - value
const user = {
  name: "르탄이",
  age: 30,
  isAdmin: true,
  printHello: () => console.log("hello")
};

// 객체 접근: 점 표기법(.)
console.log(user.name);
console.log(user.age);
user.printHello();

// 객체 접근: 괄호 표기법
const attribute = "name";
console.log(user[attribute]);

// 객체에 속성 접근
user.email = "jay@gmail.com"; // 객체 속성 추가
user.age = 31; // 객체 속성 수정
delete user.isAdmin; // 객체 속성 삭제

console.log(user);
