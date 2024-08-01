// forEach, map, filter
const fruit = ["apple", "orange", "grape"];

//인자로 들어가는 함수 = 콜백함수
fruit.forEach(function (a) {
    console.log(a); // 배열의 갯수만큼 출력이 됨: apple, orange, grape
});

const result1 = fruit.map(function (a) {

});
console.log(result1); // 원본 배열의 갯수만큼 undefined 출력이 됨: [ undefined, undefined, undefined ]

// 2
// const result2 = fruit.map(function (a) {
//     return {
//         name: a,
//         kind: "과일".
//     }
// });

// 3
const result3 = fruit.map(function (a) {
    if (a === "apple") {
        return {
            과일이름: a,
            좋아하는지여부: true,
        }
    } else {
        return {
            과일이름: a,
            좋아하는지여부: false,
        }
    }
});

console.log(result3);


// filter 함수는 참 거짓으로 리턴
const 내가좋아하는과일 = fruit.filter(function (f) {
    if (f === "apple") {
        return true;
    } else {
        return false;
    }
})
console.log(내가좋아하는과일);


// filter
console.log('---------------------------------------')
const 회원명부 = [
    {
        이름: "홍길동",
        나이: 25,
        성별: "male",
    },
    {
        이름: "홍길순",
        나이: 30,
        성별: "female",
    },
    {
        이름: "홍길자",
        나이: 40,
        성별: "female",
    },
];


// filter 함수를 사용해서, 35세 이상의 사람 중 여자만 필터링

// 방법 1
const filtered1 = 회원명부.filter(function (p) {
    if (p.나이 >= 35 && p.성별 === "female") {
        return true;
    } else {
        return false;
    }
})
console.log(filtered1);

// 방법 2
const filtered2 = 회원명부.filter(function (p) {
    return p.나이 >= 35 && p.성별 === "female";
})

console.log('---------------------------------------')

//find : 선착순 1번
const arr1 = [1, 2, 5, 10];
const foundValue = arr1.find(function (num) {
    //  return true or false;
    // return num >= 5;
    if (num >= 5) {
        return true;
    } else {
        return false;
    }
});
console.log(foundValue);

// 회원명부에서 여자인 첫 번째 회원을 찾아보세요. (find 이용)
const foundFirstFemale = 회원명부.find(function (p) {
    if (p.성별 == "female") {
        return true;
    } else {
        return false;
    }
});

console.log(foundFirstFemale);

console.log('---------------------------------------')

// sort: 정렬
const arr2 = ["김민수", "최지철", "박현준"];
const t = arr2.sort();

console.log("arr2: ", arr2);    // [ '김민수', '박현준', '최지철' ]: 원본배열이 바뀜
console.log("t: ", t);          // [ '김민수', '박현준', '최지철' ]


const 원본배열 = [4, 10, 5, 20, 2];

원본배열.sort((a, b) => b - a);     // 내림차순 정렬
console.log(원본배열);              // sort는 원본배열 자체를 바꾸기 때문에 리턴 해줄 필요가 없음

원본배열.sort((a, b) => a - b);     // 오름차순 정렬
console.log(원본배열);


// 내림차순 정렬 코드 풀어쓰기
원본배열.sort(function (하나, 둘) { // sort함수는 두개의 요소를 계속 비교함: 인자로 두개를 받아야 함
    // return 0보다 큰 경우
    // return 0보다 작은 경우
    // return 0인 경우
    return 둘 - 하나;
});


// 문자끼리 비교해서 숫자가 필요할 때
const result4 = "apple".localeCompare("banana");
console.log('result4: ', result4);  // result4:  -1

const result5 = "banana".localeCompare("apple");
console.log('result5: ', result5);  // result5:  1




// (1) 원본배열에 영향이 있음 : 원본배열을 바꿈
// (2) sort도 callback함수를 가진다
// (3) 이 callback함수는 인자(input)가 2개
// (4) 이 callback함수의 return에 필요한 것은 '숫자'
// (5) 숫자로 이루어진 배열을 정렬할 때는 b-a
// (6) 문자로 이루어진 배열을 정렬할 때는 localeCompare 필요


console.log('---------------------------------------')

function sortArray1(arr) {
    // 여기에 sort를 사용하여 작성하세요
    const result1 = arr.sort(function (인자1, 인자2) {
        return 인자1 - 인자2;
    });
    return result1;
    // return arr.sort((a, b) => a - b);
}
function sortArray2(arr) {
    const result2 = arr.sort(function (인자1, 인자2) {
        return 인자1.localeCompare(인자2);
    });
    return result2;
    // return arr.sort((a, b) => a.localeCompare(b));

}

// 예시 출력
console.log(sortArray1([3, 1, 4, 1, 5, 9])); // 출력: [1, 1, 3, 4, 5, 9]
console.log(sortArray2(["바나나", "사과", "포도"])); // 출력: ['바나나', '사과', '포도']

// 문자 내림차순 정렬return arr.sort((a, b) => b.localeCompare(a));