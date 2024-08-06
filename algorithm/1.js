// function rockPaperScissors(a, b) {
//     if ('가위', '가위' || '바위', '바위' || '보', '보') {
//         return '무승부';
//     } else if ('가위', '바위' || '바위', '보' || '보', '가위') {
//         return 'b 승리';
//     } else { 
//         return 'a 승리';
//     }
// }

function rockPaperScissors(a, b) {
    if ((a === '가위' && b === '가위') || (a === '바위', b === '바위') || (a === '보', b ==='보')) {
        return '무승부';
    } else if ((a=== '가위', b === '바위') || (a=== '바위', b==='보') || (a==='보', b==='가위')) {
        return 'b 승리';
    } else { 
        return 'a 승리';
    }
}


// 9가지 경우의 수 테스트
console.log(rockPaperScissors('가위', '가위') === '무승부');
console.log(rockPaperScissors('가위', '바위') === 'b 승리');
console.log(rockPaperScissors('가위', '보') === 'a 승리');
console.log(rockPaperScissors('바위', '가위') === 'a 승리');
console.log(rockPaperScissors('바위', '바위') === '무승부');
console.log(rockPaperScissors('바위', '보') === 'b 승리');
console.log(rockPaperScissors('보', '가위') === 'b 승리');
console.log(rockPaperScissors('보', '바위') === 'a 승리');
console.log(rockPaperScissors('보', '보') === '무승부');