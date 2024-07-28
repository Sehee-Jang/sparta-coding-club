/**
 * js 파일을 만들어 getStudents 함수를 완성하여 members 객체에서 role이 tutor인 객체들의 name을 콘솔에 찍어보세요.
 *  1. `getStudents` 함수의 내용을 채워주세요.
 *  2. `getStudents` 함수를 실행시켜주세요.
 *      - 결과
 *          최원장
 *          윤창식
 *          김병연
 *          박가현
 */
const members = [
    {
        name: "최원장",
        role: "tutor",
    },
    {
        name: "윤창식",
        role: "tutor",
    },
    {
        name: "김병연",
        role: "tutor",
    },
    {
        name: "박가현",
        role: "tutor",
    },
    {
        name: "김멍멍",
        role: "student",
    },
    {
        name: "이야옹",
        role: "student",
    },
];

function getStudents() {
    // hint: 배열 안의 모든 객체를 한 번 반복한다.  (반복문)

    for (let i = 0; i < members.length; i++) {
        // hint: 반복문 안에서 role이 tutor인 객체의 name을 콘솔에 출력한다 (조건문)
        if (members[i]['role'] === "tutor") {
            console.log(members[i]['name']);
        }
    }
}

// 함수 실행
getStudents();