// map (~값을 맵핑한다.)
const testArr = ['apple', 'carrot', 'strawberry'];

testArr.map(function () {
    console.log(1); // 배열의 길이만큼 1 출력
});

testArr.map(function (item) {
    console.log(item);  //  매개변수의 함수의 매개변수 item로 배열의 값들이 차례대로 들어옴
});

const 결과값 = testArr.map(function (item) {

});
// 원본배열의 길이 만큼 반환
console.log(결과값);    // [ undefined, undefined, undefined ]
// node day3-2.js

// 원본 배열에서 10의 배수만큼 출력
const testArr1 = [3, 1, 2];
const result1 = testArr1.map(function (item) {
    return item * 10;   //  [ 30, 10, 20 ]
});
console.log(result1);

console.log('------------------------------');

const people = [
    {
        id: 1,
        name: "John",
        age: 30,
    },
    {
        id: 2,
        name: "Amy",
        age: 15,
    },
    {
        id: 3,
        name: "Emily",
        age: 16,
    },
];

// 배열 복사
const newPeople = people.map(function (person) {
    const newPerson = {
        id: person.id,
        name: person.name,
        age: person.age,
        isAdult: person.age >= 20,  // isAdult: true or false 반환
    }
    return newPerson;
});
console.log(newPeople)

console.log('------------------------------');

const testArr2 = ['윤창식', '최원장', '김병연', '박가현'];

const newArr = testArr2.map(function (data) {
    const newArray = {
        name: data,
        job: "tutor",
    }
    return newArray;
});
console.log(newArr);

// newArray의 값
// [
//     {
//         name: "윤창식",
//         job: "tutor"
//     },
//     {
//         name: "최원장",
//         job: "tutor"
//     },
//     {
//         name: "김병연",
//         job: "tutor"
//     },
//     {
//         name: "박가현",
//         job: "tutor"
//     },
// ]
