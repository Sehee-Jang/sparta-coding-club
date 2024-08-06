// 배열 api =  배열이 가지고 있는 메서드
// 메서드 <-> 함수

// 함수: 호출의 주체가 없는 것 ( method1() )
// 메서드: 호출의 주체가 있는 것 ( obj.method1() )
// forEach, map, filter

// [1, 2, 3].forEach(function (인자) { 
//     return
// });
// [1, 2, 3].map(function () { 
//     return
// });
// [1, 2, 3].filter(function () { 
//     return
// });

// ------ slice
const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.slice(1, 3); // 배열의 첫번째에서 시작해서 세번째 전까지 
console.log(newNumbers);// [2, 3]
    

// ------ some: 어떤 값이 실제로 존재하냐 아니냐 할 때 많이 사용함
numbers.some(function (n) { 
    console.log(n); // 1, 2, 3, 4, 5
})

const result1 = numbers.some(function (n) { 
    return n ===2 ; // 1, 2, 3, 4, 5
})
console.log(result1); // true: 하나라도 있으면 참

const result2 = numbers.some(function (n) { 
    return n >5; // 1, 2, 3, 4, 5
})
console.log(result2); // false: 

const result3 = numbers.some(function (n) { 
    return n >= 5; // 1, 2, 3, 4, 5
})
console.log(result3); // true

const people = [
    {
        name: "John",
        age: 21,
    },
    {
        name: "Amy",
        age: 30,
    },
];

// 30살 이상인 사람이 한 명이라도 존재?
const result4 = people.some(function (person) { 
    return person.age >= 30;
})
console.log('30살 이상인 사람이 존재 하는지: ', result4);

// 모든사람이 30살 이상?
const result5 = people.every(function (person) {    // every사용
    return person.age >= 30;
})
console.log('모든 사람이 30살 이상이니: ', result5);