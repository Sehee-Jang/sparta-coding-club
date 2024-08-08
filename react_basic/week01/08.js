// Promise: javaScript에서 비동기 작업의 최종 완료 또는 실패를 나타내는 객체

const myPromise = new Promise(function (resolve, reject) {
  if (false) {
    resolve("Success!");
  } else {
    reject("Failed.");
  }
});

myPromise
  .then(function (value) {
    console.log(value); // if(true)이면 Success! 출력
  })
  .catch(function (value) {
    console.log(value); // Failed. 출력
  });

// Async 함수: 항상 Promise 반환

// Await: 프로미스의 완료를 기다리는 동안 함수의 실행을 일시적으로 중단하고 해결되면 함수 실행을 자동 재개 (비동기코드를 동기적표현 가능)
async function fetchData() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await data.json();
    console.log(json);
  } catch (error) {
    console.error("Data loading failed", error);
  }
}

fetchData();
