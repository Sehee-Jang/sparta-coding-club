/**
 * 문제 설명
    정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

    제한 사항
        n은 0 이상 3000이하인 정수입니다.
    
    입출력 예
        n	return
        12	28
        5	6

    입출력 예 설명
        입출력 예 #1
        12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.

        입출력 예 #2
        5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.
 */

// function solution(n) {
//   var sum = 0;

//   // n과 같거나 작을 때까지 반복
//   for (i = 0; i <= n; i++) {
//     //만약 n의 나머지가 없다면
//       if (n % i === 0) {
//         // 테스트 출력
//         console.log("약수는: " + i); // 1, 2, 3, 4, 6, 12 출력
//         // 변수 sum에 i를 하나씩 더해서 저장
//         sum = i + i; // 처음 숫자 1을 제외한 나머지 수들을 단계별로 저장해야하는데... 1, 1+2, 3+3, 6+4...
//       console.log("약수의 합: " + sum);
//     }
//   }
//   return sum;
// }

function solution(n) {
  var sum = 0;

  // n과 같거나 작을때까지 반복
  for (i = 0; i <= n; i++) {
    //만약 n의 나머지가 없다면
    if (n % i === 0) {
      console.log("약수는: " + i); // 1, 2, 3, 4, 6, 12 출력
      sum = sum + i; // 변수 sum에 i하나씩 더해서 저장
      console.log("약수의 합: " + sum);
    }
  }
  return sum;
}

solution(12);
// console.log("약수의 합: " + solution(12));
// console.log("약수의 합: " + solution(5));
