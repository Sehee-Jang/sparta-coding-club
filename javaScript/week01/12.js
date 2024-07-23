// 조건문의 중첩
let age = 20;
let gender = "여성";

if (age >= 18) {
    if (gender === "남성") {
        console.log("성인 남성입니다.");
    } else {
        console.log("성인 여성입니다.");
    }
} else {
    console.log("미성년자입니다.");
}