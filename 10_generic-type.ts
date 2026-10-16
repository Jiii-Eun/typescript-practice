// 제네릭은 타입을 변수처럼 사용할 수 있게 해주는 역할(parms)

// <T> 제네릭 타입 선언, 타입을 호출할 때 설정
type ArrayType<T> = T[];

const numberArray: ArrayType<number> = [1, 2, 3];
const stringArray: ArrayType<string> = ["1", "2", "3"];

// api 예시
// 카테고리 정보
// {
//  status: "ok",
//  totalPage: 2,
//  totalResult: 10,
//  page: 1,
//  data: [{name: "액션"}, {name: "로맨스"}, {name: "가족"}]
// }

// 영화 정보
// {
//  status: "ok",
//  totalPage: 20,
//   totalResult: 300,
//   page: 1,
//   data:[{title: "기생충", genre: "액션"}, {title: "파묘", genre: "공포"}, {title: "7번방의 선물", genre: "가족"}]
// }

type ApiResponse<T> = {
  status: string;
  totalPage: number;
  totalResult: number;
  page: number;
  data: T[];
};

type Category1 = {
  name: string;
};

type Movie1 = {
  title: string;
  genre: string;
};

type CategoryResponse = ApiResponse<Category1>;
type MovieResponse = ApiResponse<Movie1>;

let movieData: MovieResponse = {
  status: "ok",
  totalPage: 20,
  totalResult: 300,
  page: 1,
  data: [
    { title: "기생충", genre: "액션" },
    { title: "파묘", genre: "공포" },
    { title: "7번방의 선물", genre: "가족" },
  ],
};

function useState<T>(초기화값: T): [T, 함수<T>] {
  return [값, 함수];
}

interface Length {
  length: number;
}

// extends, 타입확장 Length 가 반드시 존재 해야 한다.
function getValue<T extends Length>(data: T) {
  console.log(data.length);
}
