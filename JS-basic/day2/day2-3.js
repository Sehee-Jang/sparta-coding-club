// 문제1

console.log("-------------- 문제1 --------------")

function printNumber() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

function printNumber() {
    for (let i = 0; i < 10; i++) {
        console.log(i + 1);
    }
}

printNumber(); // 출력: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10


// 문제 2
console.log("-------------- 문제2 --------------")
function sumUpTo(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    console.log(sum);
}

sumUpTo(5);     // 15 (1 + 2 + 3 + 4 + 5)
sumUpTo(10);    // 55 (1 + 2+ 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)

// 문제 3
console.log("-------------- 문제3 --------------")
function printEvenNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        // console.log("Index: ", i);
        // console.log("Value: ", arr[i]);
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
        }
    }
}

printEvenNumber([1, 2, 3, 4, 5, 6]); // 2, 4, 6
printEvenNumber([10, 15, 20, 25, 30]); // 10 ,20, 30

// 응용문제
console.log("-------------- 응용문제 --------------")
function printTest(arr) {
    // input으로 들어오는 배열긔 값이 3의 배수인 경우 출력
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) {
            console.log(arr[i]);
        }
    }

}

printTest([2, 5, 10, 12, 15, 17, 21]);  // 3배수만 출력

// 문제 4
console.log("-------------- 문제4 --------------")
// 방법 1
function printReversed(arr) {
    for (let i = arr.length; i > 0; i--) { // 0부터 arr의 길이만큼만 , 0 은 포함 안됨
        console.log(arr[i - 1]);
    }
}

// 방법 2 
function printReversed(arr) {
    for (let i = arr.length - 1; i > 0 - 1; i--) { // 0부터 arr의 길이만큼만 , 0 은 포함 안됨
        console.log(arr[i]);
    }
}
printReversed([1, 2, 3, 4, 5]); // 출력: 5, 4, 3, 2, 1
printReversed([10, 20, 30, 40]) // 출력: 40, 30, 20, 10


// 문제 5
console.log("-------------- 문제5 --------------")
function getName(person) {
    return person.name;
}

// 예시 출력
const name1 = getName({ name: 'Alice', age: 25 });
console.log(name1); // 출력: Alice

const name2 = getName({ name: 'Bob', age: 30 });
console.log(name2); // 출력: Bob