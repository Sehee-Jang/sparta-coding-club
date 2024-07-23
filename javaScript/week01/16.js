// 배열
// 1-1. 기본적인 배열 생성
let fruit1 = ["사과", "바나나", "오렌지"];

// 위의 예제에서는 배열 fruits를 생성합니다. 배열을 만들 때는 대괄호([])를 사용하며, 각 요소는 쉼표(,)로 구분합니다.

// 1-2. 배열의 크기 지정
let numbers = new Array(5);

//위의 예제에서는 크기가 5인 배열 numbers를 생성합니다. new Array()를 사용하여 배열의 크기를 지정할 수 있습니다.


// 2. 배열 요소 접근

let fruit2 = ["사과", "바나나", "오렌지"];

console.log(fruit2[0]);   // "사과"
console.log(fruit2[1]);   // "바나나"
console.log(fruit2[2]);   // "오렌지"e.log(fruits[2]);   // "오렌지"

// 위의 예제에서는 배열 fruit2 첫 번째 요소부터 세 번째 요소까지 출력합니다. 배열의 요소에 접근할 때는 대괄호([]) 안에 인덱스 값을 넣습니다.

// 3. 배열 메소드
// 3-1. push() 메소드
let fruit3 = ["사과", "바나나"];

fruit3.push("오렌지");

console.log(fruit3);   // ["사과", "바나나", "오렌지"]

// 3-2. pop() 메소드
let fruit4 = ["사과", "바나나", "오렌지"];

fruit4.pop();

console.log(fruit4);   // ["사과", "바나나"]

// 3-3. shift() 메소드
let fruit5 = ["사과", "바나나", "오렌지"];
fruit5.shift();
console.log(fruit5);   // ["바나나", "오렌지"]

// 3-4. unshift() 메소드
let fruit6 = ["바나나", "오렌지"];
fruit6.unshift("사과");
console.log(fruit6);   // ["사과", "바나나", "오렌지"]

// 3-5. splice() 메소드
let fruit7 = ["사과", "바나나", "오렌지"];
fruit7.splice(1, 1, "포도"); // 배열 1번째 자리에 1개를 지우고 . 그자리에 포도를 추가
console.log(fruit7);   // ["사과", "포도", "오렌지"]

// 3-6. slice() 메소드
let fruit8 = ["사과", "바나나", "오렌지"];
let slicedFruits = fruit8.slice(1, 2); // 배열의 두번째 요소부터 세번째 요소전까지 세로운 배열로 만듬 
console.log(slicedFruits);   // ["바나나"]

// 3-7. forEach() 메소드
let numbers1 = [1, 2, 3, 4, 5];

// numbers.forEach(매개변수)
// 매개변수 자리에 함수를 넣는 것: 콜백 함수
numbers1.forEach(function (number) {
    console.log(number);
});

// 3-8. map() 메소드
let numbers2 = [1, 2, 3, 4, 5];

let newNumbers = numbers2.map(function (item) { // map을 거치고 나면 새로운 배열이 나오기 때문에 새로운 배열을 받아야 함
    return item * 2;
});
console.log("map으로 생성된 배열: " + newNumbers); // 2,4,6,8,10

let squaredNumbers = numbers2.map(function (number) {
    return number * number;
});

console.log(squaredNumbers);   // [1, 4, 9, 16, 25]

// 3-9. filter() 메소드
let numbers3 = [1, 2, 3, 4, 5];

let filteredNumbers = numbers3.filter(function (item) {
    return item > 3;
});
console.log("Filtered numbers: " + filteredNumbers); // 4, 5

let evenNumbers = numbers3.filter(function (number) {
    return number % 2 === 0;
});

console.log("Filtered even numbers: " + evenNumbers); // 2, 4

// 3-10. reduce() 메소드
let numbers4 = [1, 2, 3, 4, 5];

let sum = numbers4.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum);

// 3-11. find() 메소드
let numbers5 = [1, 2, 3, 4, 5];

let foundNumber = numbers5.find(function (number) {
    return number > 3;
});

console.log(foundNumber);   // 4

// 3-12. some() 메소드
let numbers6 = [1, 2, 3, 4, 5];

let hasEvenNumber = numbers6.some(function (number) {
    return number % 2 === 0;
});

console.log(hasEvenNumber);   // true

// 3-13. every() 메소드
let numbers7 = [2, 4, 6, 8, 10];

let isAllEvenNumbers = numbers7.every(function (number) {
    return number % 2 === 0;
});

console.log(isAllEvenNumbers);   // true

// 3-14. sort() 메소드
let numbers8 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

numbers8.sort(function (a, b) {
    return a - b;
});

console.log(numbers8);   // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

// 3-15. reverse() 메소드
let numbers9 = [1, 2, 3, 4, 5];

numbers9.reverse();

console.log(numbers9);   // [5, 4, 3, 2, 1]