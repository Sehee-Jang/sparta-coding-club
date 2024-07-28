function multiplyBy(num) {
    return function (x) {
        return x * num;
    }
}

function add(x, y) {
    return x + y;
}

const multiplyByTwo = multiplyBy(2);
/**
 * 1. multiplyBy의 리턴값이 오른쪽으로 옴
 * 2. multiplyBy(2)의 2가 multiplyBy(num)의 num으로 대체
 */
// const multiplyByTwo = function (x) {
//     return x * 2;
// };
console.log(multiplyByTwo(10)); // 20

// const multiplyByThree = multiplyBy(3);
/**
 * 1. multiplyBy의 리턴값이 오른쪽으로 옴
 * 2. multiplyBy(3)의 3가 multiplyBy(num)의 num으로 대체
 */
const multiplyByThree = function (x) {
    return x * 3;
};
console.log(multiplyByThree(10));   // 30

const result = add(multiplyByTwo(5), multiplyByThree(10));  // (2 * 5) + (3 * 10)
console.log(`Final: ${result}`);    // 40