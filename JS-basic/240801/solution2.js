/**
 * # 문제 2. 배열 메서드 활용하기: sort()
 * 튜터님 이름이 담긴 배열을 sort()를 사용해 가나다순으로 정렬해주세요!
 * 결과: ['김르탄','김병연', '내배캠', '박가현', '윤창식', '최원장']
 */

let tutorNames = ["최원장", "김르탄", "윤창식", "박가현", "김병연", "내배캠"];

function sortedNames(tutorNames) {
    const result = tutorNames.sort(function (name1, name2) { 
        return name1.localeCompare(name2);
    })
    return result;
}
result = sortedNames(tutorNames);

console.log(tutorNames);
console.log('김르탄'.localeCompare('윤창식'));  // -1 : 둘의 위치를 그대로 두겠다
console.log('윤창식'.localeCompare('김르탄'));  //  1
