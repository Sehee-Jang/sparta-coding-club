// 01. 나이든 유저
// 가장 아래의 코드가 실행 되었을 때, “Passed ~” 가 출력되도록 getAge 함수를 채워주세요


//-------------- 모범 답안
var user = {
    name: "john",
    age: 20,
}

var getAged = function (user, passedTime) { //user와 passedTime을 받음: passedTime만큼 나이 먹은 user가 복사
    // 여기를 작성해 주세요!
    var newUser = {}; // (1) newUser을 생성하여 빈 객체로 만들어 줌
    for (var prop in user) { // (2) for문을 통해 유저 안에 있는 키 prop가 계속해서 할당 됨
        newUser[prop] = user[prop]; // (3) newUser에 prop란 키를 가진 것을 기존에 가지고 있던 user의 prop를 새롭게 할당해라

    }
    newUser.age += passedTime;  // (5) newUser의 나이를 passedTime만큼 더함
    // console.log('--->', newUser);   // (6) ---> { name: 'john', age: 26 }: 나이먹은 유저가 출력이 잘 되는 것 확인
    // console.log('New User: ', newUser); // (4) 테스트: New User:  { name: 'john', age: 20 } 복사가 잘 되는 것 확인 됨
    return newUser; // (7) newUser 리턴
};

var agedUser = getAged(user, 6);

var agedUserMustBeDifferentFromUser = function (user1, user2) {
  
    // console.log(user1); // { name: 'john', age: 20 }    
    // console.log(user2); // { name: 'john', age: 26 }
    
    if (!user2) {
        console.log("Failed! user2 doesn't exist!");
    } else if (user1 !== user2) {
        console.log("Passed! If you become older, you will be different from you in the past!")
    } else {
        console.log("Failed! User same with past one");
    }
}

agedUserMustBeDifferentFromUser(user, agedUser);