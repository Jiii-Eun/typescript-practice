// Female Male
// enum은 타입으로도 쓸 수 있고 값으로도 쓸 수 있다.
enum Gender {
  FEMALE = "Female",
  MALE = "Male",
}

enum SearchType {
  DATE = "Date", // 기본값: 0
  KEYWORD = "Keyword", // 기본값: 1
  ORDER = "Order", // 기본값: 2
}

function Enum() {
  let gender: Gender = Gender.FEMALE;
}


//---------- enum과 const enum의 차이 --------------
// enum
// 객체 취급
// javascript에서 이해할 수 없기 때문에 트리쉐이킹이 안된다
// ✔️트리쉐이킹: 컴파일 시 사용하지 않는 코드를 제거하는 것

// const enum
// 상수 취급으로 인해 자바스크립트가 이해 할 수 있어 트리쉐이킹이 된다.
// enum의 단점을 보완하기 위해 나왔다.
// 단점: 디버깅 할 때 값이 보이지 않는다.