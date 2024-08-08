/**
 * Promise는 비동기 처리에 대해, 처리가 끝나면 알려달라는 ‘약속’이에요.
 * new 연산자로 호출한 Promise의 인자로 넘어가는 콜백은 바로 실행돼요.
 * 그 내부의 resolve(또는 reject) 함수를 호출하는 구문이 있을 경우 resolve(또는 reject) 둘 중 하나가 실행되기 전까지는 다음(then), 오류(catch)로 넘어가지 않아요.
 * 따라서, 비동기작업이 완료될 때 비로소 resolve, reject 호출해요.
 *
 */

// -- 10.js 콜백지옥 함수와 똑같음
new Promise(function (resolve) {
  setTimeout(function () {
    var name = "에스프레소";
    console.log(name);
    resolve(name); // 에스프레소를 이 다음에서 가져갈 수 있게 resolve로 인자를 넘겨 줌, resolve를 했다는 것 = then으로 받을 수 있음
  }, 500); // 0.5초 후에 실행
}).then(function (preName) {
  // then에도 콜백함수가 들어감, 콜백함수 인자에는 resolve로 넣어놨던 이름이 들어감
  //  이 안에서도 새롭게 Promise를 만듬
  return new Promise(function (resolve) {
    setTimeout(function () {
      var name = preName + ", 아메리카노";
      console.log(name);
      resolve(name);
    }, 500);
  })
    .then(function (preName) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          var name = preName + ", 카페모카";
          console.log(name);
          resolve(name);
        }, 500);
      });
    })
    .then(function (preName) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          var name = preName + ", 카페라떼";
          console.log(name);
          resolve(name);
        }, 500);
      });
    });
});
