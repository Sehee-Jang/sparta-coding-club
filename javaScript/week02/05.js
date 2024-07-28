// 일급 객체로서의 함수 (2)

// (4)  객체의 프로퍼티로 함수를 할당
const person1 = {
    name: 'John',
    age: 31,
    isMarried: true,
    sayHello: function () {
        console.log("Hello, my name is " + this.name);
    }
}

// 템플릿 리터럴을 사용한 방법
const person2 = {
    name: 'John',
    age: 31,
    isMarried: true,
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
}

// 화살표 함수를 사용한 방법
/**
 * 화살표 함수 사용 시 this를 바인딩하지 않는다.
 */
const person3 = {
    name: 'John',
    age: 31,
    isMarried: true,
    sayHello: () => {
        console.log(`Hello, my name is ${this.name}`)   // 출력 시 this.name이 undefined로 출력됨
    }
}


person.sayHello();