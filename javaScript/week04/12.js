// Refactoring: 비효율적인 코드를 효율적인 코드로 변경하는 것
var addCoffee = function (name) {
  return function (preName) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        // var name = preName + ", " + name;
        // 백틱을 사용하여 표현도 가능
        var newName = preName ? `${preName}, ${name}` : name; // preName이 있으면 `${preName}, ${name}, 아니면 name만
        console.log(newName);
        resolve(newName);
      }, 500);
    });
  };
};

// new Promise부분만 실행하고 싶다면 addCoffee("에스프레소"); 코드가 아래와 같으니, addCoffee("에스프레소")();로 실행해줘야 함
// function (preName) {
//     return new Promise(function (resolve) {
//       setTimeout(function () {
//         // var name = preName + ", " + name;
//         // 백틱을 사용하여 표현도 가능
//         var newName = preName ? `${preName}, ${name}` : name; // preName이 있으면 `${preName}, ${name}, 아니면 name만
//         console.log(newName);
//         resolve(newName);
//       }, 500);
//     });
//   };

addCoffee("에스프레소")().then(addCoffee("아메리카노")).then(addCoffee("카페모카")).then(addCoffee("카페라떼"));
