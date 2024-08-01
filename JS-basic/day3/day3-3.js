// filter
const testArr1 = [30, 10, 25, 7];

// 10보다 크거나 같은 값을 testArr1로부터 뽑아내고 싶어요.
const newArr1 = testArr1.filter(function (num) {
    // console.log(data)
    // return true;    // [ 30, 10, 25, 7 ]: 새로운 배열에 모두 다 포함
    // return false;      // []: 빈 배열 리턴

    // 방법 1:
    // if (num >= 10) {    // 10 보다 큰 수만 포함
    //     return true;
    // } else {            // 나머지는 다 거름
    //     return false;
    // }

    // 방법 2:
    // const isTarget = num >= 20;
    // return isTarget;

    // 방법 3:
    return num >= 20;
});

console.log(newArr1) // [] 빈 배열 리턴: 전부 다 걸러버림


console.log('------------------------------------')
const tutors = [
    {
        name: "윤창식",
        job: "tutor"
    },
    {
        name: "최원장",
        job: "developer"
    },
    {
        name: "김병연",
        job: "tutor"
    },
    {
        name: "박가현",
        job: "tutor"
    },
]

const realTutors = tutors.filter(function (tutor) {
    // 방법 1
    // if (tutor.job === "tutor") {
    //     return true;
    // } else {
    //     return false;
    // }

    // 방법 2
    // const isTarget = tutor.job === "tutor";
    // return isTarget;

    // 방법 3
    return tutor.job === "tutor";
});
console.log(realTutors);

// forEach : 값을 리턴하지 않음
// map: return 새로운 배열 -> 원래 있었던 요소들을 가공해서 새로운 배열을 내보냄
// filter: return 새로운 배열 -> 원래 있었던 배열의 특정 조건을 사용해서 필터링 할지 안할지 