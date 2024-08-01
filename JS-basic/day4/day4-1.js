// 1. true/false 논리 연산

// 논리곱 연산자(&&): 조건 중 하나라도 false이면 false = 모든 조건이 true 여야 true

// true && true && false && true

// const name = "홍길동";

// if (name === "홍길동" && "심청이") {

// }



// 논리합 연산자(||): 조건 중 하나라도 true가 있으면 그냥 true (or)
// if (name === "홍길동" || "심청이") {

// }


// --- 1번 
let age = 25;
let isMember = true;

// 나이가 18세 이상이고 회원이어야 접근 가능
if (age >= 18 && isMember === true) {
    console.log("접근 허용");
} else {
    console.log("접근 불가");
}


// --- 2번 
// let isLoggedIn = false;
// let isAdmin = true;

// // 로그인 상태이거나 관리자여야 접근 가능
// if (isLoggedIn === true || isAdmin === true) {
//     console.log("관리자 페이지에 접근 가능");
// } else {
//     console.log("관리자 페이지에 접근 불가");
// }

// --- 3번
// let isNotLoggedIn = false;
// let isAdmin = true;

// // 로그인 상태이거나 관리자여야 접근 가능
// if (isNotLoggedIn === false || isAdmin) {   // if (!isNotLoggedIn || isAdmin) 로 쓸 수도 있음
//     console.log("관리자 페이지에 접근 가능");
// } else {
//     console.log("관리자 페이지에 접근 불가");
// }


// --- 4번
// let isLoggedIn = false;
// let isNotAdmin = true;

// // 로그인 상태이거나 관리자여야 접근 가능
// if (isLoggedIn === true && isNotAdmin === false) {  //if (isLoggedIn && !isNotAdmin)
//     console.log("관리자 페이지에 접근 가능");
// } else {
//     console.log("관리자 페이지에 접근 불가");
// }

// --- 5번
let purchaseAmount = 150;
let isGoldMember = false;
let isSilverMember = true;

// --- 5-1
// 구매 금액이 100 이상이고 골드 회원이거나 실버 회원이면 할인을 적용
if (purchaseAmount >= 100 && (isGoldMember === true || isSilverMember === true)) {
    console.log("할인 적용");
} else {
    console.log("할인 미적용");
}

// --- 5-2
// 구매 금액이 100 이상이고 골드 회원이거나 실버 회원이면 할인을 적용
if (purchaseAmount >= 100 && isGoldMember || isSilverMember) {
    console.log("할인 적용");
} else {
    console.log("할인 미적용");
}

// --- 5-3: 훨씬 더 명시적인 코드
if (purchaseAmount >= 100) {
    if (isGoldMember === true || isSilverMember == true) {
        console.log("할인 적용");
    } else {
        console.log("할인 미적용");
    }
} else {
    console.log("할인 미적용");
}