/**
 * 문제 1. 논리 연산자 활용하기
 * 모든 과목이 80점 이상인지 확인하는 checkGrade 함수를 완성해주세요!
 * - 출력 결과
    - `true` 를 출력해야 합니다.
 */

const grade = {
  국어: 90,
  영어: 80,
  수학: 100,
};

// 논리 연산자(&& 또는 ||)를 활용하여 아래의 조건을 만족하는 코드를 작성해주세요.
// 출력: true

// 국어, 영어, 수학 점수가 모두 80점 이상이면 true, 아니면 false를 반환해주세요.
function checkGrade(grade) {
    if (grade.국어 >= 80 && grade.영어 >= 80 && grade.수학 >= 80) {
        return true;
    } else { 
        return false;
    }
}

console.log(checkGrade(grade));  