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

s = "pPoooyY";
split = s.split("");
console.log(split);


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

absolute = [];
signs = [];
