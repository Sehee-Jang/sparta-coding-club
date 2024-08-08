// ☆ 비동기적인 요소를 왜 동기적으로 변경하려고 하는가? ☆
// : 순서를 보장할 수 없으니 순서 보장이 필요한 어떤 로직에서 순서를 보장받기 위해서 사용함

// 제네레이터 문법: 반복할 수 있는
// function옆에 *가 붙은 함수가 제네레이터 함수
// 이 함수를 실행하면 Iterator 객체가 반환됨

// (1) 제너레이터 함수 안에서 쓸 addCoffee 함수 선언
var addCoffee = function (prevName, name) {
  setTimeout(function () {
    coffeeMaker.next(prevName ? prevName + ", " + name : name);
  }, 500);
};

// (2) 제너레이터 함수 선언
// yield 키워드로 순서 제어
// yield를 만나면 멈추고 addCoffee가 끝날 때까지 기다렸다가 다시 next()호출하면 멈췄던 부분까지 감
var coffeeGenerator = function* () {
  var espresso = yield addCoffee("", "에스프레소");
  console.log(espresso);
  var americano = yield addCoffee(espresso, "아메리카노");
  console.log(americano);
  var mocha = yield addCoffee(americano, "카페모카");
  console.log(mocha);
  var latte = yield addCoffee(mocha, "카페라떼");
  console.log(latte);
};
var coffeeMaker = coffeeGenerator();
coffeeMaker.next();
