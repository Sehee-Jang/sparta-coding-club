function solution(n) {
    var answer = '';
    var str = '수박';
    for (i = 0; i <= n; i ++){
        if (n % 2 === 0) {
            console.log(str * 2);
            return str;

        } else {
            return str + str.slice(1);
        }
    }
    return answer;
}

console.log(solution(4));