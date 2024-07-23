// 2. 문자열: String
// '' or ""
let str = "Hello World";
console.log(str);
console.log(typeof str);

// 2-1. 문자열 길이 확인하기
console.log(str.length);

// 2-2. 문자열 결합하기
let str1 = "Hello, ";
let str2 = "world!";
let result = str1.concat(str2);
console.log(result);

// 2-3. 문자열 자르기
let str3 = "Hello, World!";
console.log(str3.substr(7, 5)); // 시작 위치부터 몇 개까지 자를건지: 문자의 7번째 부터 5개까지만 출력 
console.log(str3.slice(7, 12)); // 시작 위치부터 끝 위치까지 지정: 문자의 7번째부터 12번째까지 출력

// 2-4. 문자열 검색
let str4 = "Hello, World!";
console.log(str4.search("World")); // 결과: 7 (World가 시작되는 점)

// 2-5. 문자열 대체
let str5 = "Hello, World!";
let result5 = str5.replace("World", "Javascript");
console.log(result5);

// 2-6. 문자열 분할
let str6 = "apple, banana, kiwi";
let result6 = str6.split(","); // "," 를 기준으로 나눔
console.log(result6)