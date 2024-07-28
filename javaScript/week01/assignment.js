// 1. 문자열 연습하기

/**
 * 대문자와 소문자가 섞여있는 문자열 s가 주어집니다.
 * s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요.
 * 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.
 * 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
 * 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.
 * 
 * [제한사항]
 * - 문자열 s의 길이 : 50 이하의 자연수
 * - 문자열 s는 알파벳으로만 이루어져 있습니다.
 */

function solution1(s) {
    let answer = true;

    // 1. 대문자로 통일
    s = s.toUpperCase();

    // 2. for문을 통해 문자열의 요소 하나 하나씩을 비교
    let num = 0;
    for (i = 0; i < s.length; i++) {
        // 2-1. p, y 와 비교
        if (s[i] === "P") {
            num++;  // 갯수 더하기
        }
        if (s[i] === "Y") {
            num--;  // 갯수 빼기
        }
    }

    // 3. 갯수 체크(p와 y의 개수가 같은지 체크)
    if (num === 0) {
        answer = true;
    } else {
        answer = false;
    }

    return answer;
}

let str1 = "pPoooyY";
let str2 = "Pyy";

console.log(solution1(str1));
console.log(solution1(str2));

console.log("=======================================")
// 2. 반복문, 조건문 연습하기

/**
 * 어떤 정수들이 있습니다.
 * 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다.
 * 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.
 *
 * [제한사항]
 * - absolutes의 길이는 1 이상 1,000 이하입니다.
 *      - absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
 * - signs의 길이는 absolutes의 길이와 같습니다.
 *      - `signs[i]` 가 참이면 `absolutes[i]` 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.
 *
 */

function solution2(absolutes, signs) {
    // 1. return 해야하는 answer 생성
    let answer = 0;

    // 2. 두 배열을 비교해 가면서 값을 더하거나 빼줄 것
    // 2-1. 두 배열의 크기가 같음
    for (let i = 0; i < absolutes.length; i++) {
        // 부호(+,-)에 따른 처리
        if (signs[i] === true) {   // sign의 해당 값이 양수이면
            // 값이 true인 경우(양수)
            answer = answer + absolutes[i]; //  값을 더해라
        } else if (signs[i] === false) { // sign의 해당 값이 음수이면
            // 값이 false인 경우(음수)
            answer = answer - absolutes[i]; // 값을 빼라
        }
    }

    // 3. 출력
    return answer;
}

const absolutes1 = [4, 7, 12];
const signs1 = [true, false, true];

const absolutes2 = [1, 2, 3]
const signs2 = [false, false, true]

console.log(solution1(absolutes1, signs1));
console.log(solution2(absolutes2, signs2));

// let absolutes = [4, 7, 12];
// let signs = [true, false, true];

// for (i = 0; i < signs.length; i++) {
//     if (signs[i] === true) {
//         let x = absolutes[i];
//         console.log(x)
//     } else {
//         let y = -(absolutes[i]);
//         console.log(y)
//     }
// }

// function add() {
//     x
// }