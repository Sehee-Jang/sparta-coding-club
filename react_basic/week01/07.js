// Modules : 재사용 가능한 코드 조각을 캡슐화하고 다른 자바스크립트 파일에서 쉽게 재사용할 수 있게 해줌
// 1. export 키워드를 사용하여 모듈을 만들고 다른파일에서 아용할 수 있게 함 (다른 파일에서 import 하여 사용)
// 2. 모듈을 사용하는 이유
//  2.1 명확한 종속성 관리(파일 로딩 순서를 신경쓸 필요X)
//  2.2 코드 충돌 방지
//  2.3 효율적인 코드 로딩

// 3. 모듈 기능
//  3.1 이름바꾸기
import { square as sqr } from ".utils.js";
// as 라는 키워드를 이용하여 square라는 이름을 sqr로 사용

//  3.2 기본 내보내기, 가져오기

// export default로 내보낼 수 있는 것은 한 파일당 하나

// math.js에서는 mutiply함수를 export default 내보냄(=math.js에서 가져올 수 있는 것은 mutiply 밖에 없다.)
export default function mutiply(x, y) {
  return x * y;
}

// app.js
import mutiply from ".math.js";
console.log(multiply(6, 7));

// 3.3 전체 모듈 내용 가져오기
import * as MathFunctions from "./math.js";
