// while
let i = 0;

/**
 * while (조건){
 *  // 메인로직
 *  // 증감
 * }
 */
while (i < 10) {
    console.log(i); // 0 출력 -> 1 출력 > 2 출력 > 3 .. 4......9
    i++;    // i가 1 증감, 10이 되는 순간 끝남
}

console.log("-------------------");

//while 문 활용해서 3초과 100 미만의 숫자 중 5의 배수만 출력
x = 3;
while (x < 100) {
    if (x % 5 === 0 && x >= 5) { /// 5로 나눈 나머지가 0이고, (5의 배수일 때), x가 5보다 크거나 같을 때
        console.log(x);
    }
    x++;
}

console.log("-------------------");

// do.. while
let y = 0;

do {                //  do가 먼저
    // 메인로직
    console.log(y); // 최초에 한번 무조건 실행
    y++;
} while (y < 10); // 조건

console.log("-------------------");


// break
for (let z = 0; z < 10; z++) {
    if (z === 5) {
        break; // for문 멈추고 종료함
    }
    console.log(z);
}

console.log("-------------------");

// break
for (let z = 0; z < 10; z++) {
    if (z === 5) {
        continue; // 그 다음 순서로 넘어감
    }
    console.log(z);
}