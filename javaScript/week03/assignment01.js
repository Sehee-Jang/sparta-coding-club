// 01. 나이든 유저
// 가장 아래의 코드가 실행 되었을 때, “Passed ~” 가 출력되도록 getAge 함수를 채워주세요


//-------------- 잘못 된 예시
var user = {
    name: "john",
    age: 20,
}

var getAged = function (user, passedTime) { //user와 passedTime을 받음: passedTime만큼 나이 먹은 user가 복사
    // 여기를 작성해 주세요!
    var newUser = user; // newUser을 생성하여 user를 복사
    newUser.age += passedTime;

    return newUser; // (1) Failed! User same with past one 출력됨
}

var agedUser = getAged(user, 6);

var agedUserMustBeDifferentFromUser = function (user1, user2) {
    // (2)왜냐면 user1과 user2이 같기 때문
    // (3) 우리가 나이먹게한 것은 agedUser인데 왜 여기까지 영향을 끼쳤나?
    // (4) 객체는 직접 값을 저장하는게 아니라 별도의 공간을 따로 두고 값을 저장해놓는 공간에 대한 주소를 가져오는 식,
    //     즉 참조형으로 쓰기때문에 같을 수 밖에 없음
    // (5) 그래서 getAged에 순회하면서 아예 새로운 객체를 만들어 주어야 함.
    console.log(user1); // { name: 'john', age: 26 }    
    console.log(user2); // { name: 'john', age: 26 }
    
    if (!user2) {
        console.log("Failed! user2 doesn't exist!");
    } else if (user1 !== user2) {
        console.log("Passed! If you become older, you will be different from you in the past!")
    } else {
        console.log("Failed! User same with past one");
    }
}

agedUserMustBeDifferentFromUser(user, agedUser);