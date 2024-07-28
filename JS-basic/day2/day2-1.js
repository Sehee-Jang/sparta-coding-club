// 조건문

function checkNumber(num) {
    // 1. 만약 num이 0보다 크다면 "양수입니다." 출력
    if (num > 0) {
        console.log("양수입니다.");
    } else if (num < 0) {
        // 2. 만약 num이 0보다 작다면 "음수입니다" 출력
        console.log("음수입니다.");
    } else {
        // 3. 만약 num이 0이라면 "0입니다" 출력
        console.log("0입니다.")
    }
}
checkNumber(5);     //  출력 "양수입니다."
checkNumber(-3);    //  출력 "음수입니다."
checkNumber(0);     //  출력 "0입니다."

console.log("------------------------------");

function checkAge(age) {
    if (age >= 18) {
        //1. 만약 나이가 18상 이상이면 
        console.log("Access granted.")
    } else {
        // 2. 그렇지 않으면
        console.log("Access denied.");
    }
}

checkAge(20);
checkAge(16);

console.log("------------------------------");

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log("짝수입니다.");
    } else {
        console.log("홀수입니다.");
    }
}

checkEvenOdd(4);
checkEvenOdd(7);

console.log("------------------------------");

function assignmentGrade(score) {
    if (score >= 95) {
        console.log("A");
    } else if (score >= 85) {
        console.log("B");
    } else if (score >= 75) {
        console.log("C");
    }
    else if (score >= 65) {
        console.log("D");
    } else {
        console.log("F");
    }
}

assignmentGrade(95);    // A 출력
assignmentGrade(85);    // B 출력
assignmentGrade(75);    // C 출력
assignmentGrade(65);    // D 출력
assignmentGrade(50);    // E 출력

console.log("------------------------------");

function compareToTen(num) {

}

compareToTen(15);   //  출력: "10보다 큽니다."
compareToTen(5);
compareToTen(10);