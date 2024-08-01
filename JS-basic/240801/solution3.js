/**
 * 문제 3. 배열 메서드 활용하기: find()
 * find() 메서드를 활용하여 첫 번째로 짝수를 찾는 함수를 구현합니다.
 * 출력 결과: 8
 */

// 힌트
// 1. find() 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환합니다.
// 2. 즉, 숫자 배열에서 짝수를 찾아야 합니다.
// 3. find() 메서드는 콜백 함수를 인자로 받습니다.
// 4. 콜백 함수는 주어진 요소가 짝수인지 판별합니다.
// 5. 짝수를 찾으면 true를 반환합니다.

const numbers = [3, 7, 8, 5, 9, 12, 15];


function findFirstEvenNumber(numbers) {
    return numbers.find(function (n) {
        if (n % 2 === 0) {
            return true;
        } else {
            return false;
        }
    });
}

console.log(findFirstEvenNumber(numbers));