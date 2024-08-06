// function printTest1() {
//     //함수를 호출할 때, await
//     const result1 = fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(result1);    // Promise {<pending>} : Promise의 객체
// }
// printTest1();

// await키워드가 있는 공간을 가지고 있는 함수는 반드시 async 함수여야 함
async function printTest2() {   

    //함수를 호출할 때, await
    const result2 = await fetch("https://jsonplaceholder.typicode.com/users");

    // .json도 완성된 결과를 바등려면 기다려야 함 = 비동기적으로 동작
    const users = await result2.json();

    console.log(users);
}
printTest2();


// TODO: 함수 만들기
// await을 가지고있는 함수를 호출할 때 async를 이용해야함
async function printTest() {

    // try catch 블록
    try {   // 시도할 부분을 try로 묶어줌 
        // await을 사용하여 잠깐 요청 후 대기하게 함
        const result = await fetch("https://jsonplaceholder.typicode.com/users");
        
        //.json을 사용하여 자바스크립트가 읽을 수 있도록 변환 (비동기적으로 움직이니까 await)
        const users = await result.json();

        console.log(users);
    } catch (error) {   // try 안에서 문제가 발생하면 잡아라
        // if (error.에러의종류 === "심각한 오류") {
        //     카카오알림톡으로개발자한테알려주는로직();
        // }
        console.log(error);
    }
   
}
// TODO: 함수 호출하기
printTest();