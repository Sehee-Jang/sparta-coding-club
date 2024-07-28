// -- 불변객체의 필요성 -- 문제점

// user 객체를 생성
var user = {
	name: 'wonjang',
	gender: 'male',
};

// 이름을 변경하는 함수, 'changeName'을 정의
// 입력값 : 변경대상 user 객체, 변경하고자 하는 이름
// 출력값 : 새로운 user 객체
// 특징 : 객체의 프로퍼티(속성)에 접근해서 이름을 변경했네요! -> 가변
var changeName = function (user, newName) { // 이름과 성별을 포함하는 user객체와 새로운 이름을 매개변수로 받음
	var newUser = user;     // 새로운 유저객체 생성, 인자로 받은 유저 객체를 복사(할당하는 방식)
	newUser.name = newName; // 복사 후 복사한 뉴 유저의 속성에 접근해서 새로운 이름을 할당 (가변:기존객체에 영향을 끼침)
	return newUser;
};

// 변경한 user정보를 user2 변수에 할당하겠습니다.
// 가변이기 때문에 user1도 영향을 받게 될거에요.
var user2 = changeName(user, 'twojang');

// 결국 아래 로직은 skip하게 될겁니다.
if (user !== user2) {
	console.log('유저 정보가 변경되었습니다.');
}

console.log(user.name, user2.name); // twojang twojang
console.log(user === user2); // true