// Map & Set
// 목적: 데이터의 구성, 검색, 사용을 효율적으로 처리 > 기존의 객체 또는 배열보다

// (1) Map
// Key, Value을 한 쌍으로 저장
// Key에 어떤 유형의 데이터 타입이 다 들어올 수 있다.
// Map은 Key가 정렬된 순서로 저장되기 때문
// 기능: 검색, 삭제, 제거, 여부 확인

const myMap = new Map();

// Map 값을 추가할 때 항상 set을 사용해야 함
myMap.set('key', 'value');

// get을 통해 검색
myMap.get('key');

// 대량의 데이터를 처리하기 위함이기 때문에 반복적인 부분이 중요함
// method: keys, values, entries