// 문제 2번의 사자 객체를 가져옵니다.
const lion = {
    name: "Simba",
    age: 3,
    main: true,
    line: "하쿠나 마타타",
}

// 나이를 추가하는 함수입니다.
function incrementAge(lion) {
    // 1. 사자 객체의 나이를 1 더해줌
    lion.age = lion.age + 1;

    // 2. 변경된 사자 객체 반환
    return lion;
}


// 기존 객체에 새로운 속성 추가
function addNewProperty(lion) {
    lion.leg = 4;
    return lion;
}

incrementAge(lion);
addNewProperty(lion);

console.log(lion);