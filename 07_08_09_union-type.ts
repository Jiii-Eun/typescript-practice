// type Track = {
//   title: string,
//   releaseDate: string,
// }

// type Artist = {
//   name: string,
//   releaseDate: string
// }

// type SearchResult = Track | Artist;

// interface SearchResponse {
//   searchResult: Track | Artist;
// }

// function unionType() {
//   let results: SearchResult[]=[{title: "hello", releaseDate: "2025"},{name: "john", releaseDate: "2026"}];

//   function getName(result: SearchResult ){
//     return result.name; //에러
//   }
// }

// 타입 좁히기
// 1. typeof: 원시타입 검사
// 단점: 원시타입에 대해서만 잡아낼 수 있다.

type SearchType = number | string;

function searchByKeyword(keyword: SearchType): string {
  // 넘버로 들어오는 타입은 스트링으로 바꿔주기
  if (typeof keyword === "number") {
    return keyword.toString();
  }
  return keyword;
}

console.log(searchByKeyword(3), typeof searchByKeyword(3)); // 3 string

// 2. instanceof: 객체 타입 검사
// 단점: 자바스크립트 내장 객체만 검사 가능

type Period = {
  start: string;
  end: string;
};

type searchType = Period | Date;

function getDate(day: searchType): Date {
  if (day instanceof Period) {
    // Period는 자바스크립트 자체 객체가 아니기 때문에 찾을 수 없다고 에러가 발생한다.
    return new Date(day.start);
  }

  if (day instanceof Date) {
    return day;
  }

  return new Date(day.start);
}

// 3. in: 이 필드에 이 값이 있어

type Track = {
  type: "track";
  title: string;
  releaseDate: string;
};

type Artist = {
  type: "artist";
  name: string;
  debutDate: string;
};

type SearchResult = Track | Artist;

function getName(result: SearchResult) {
  if ("title" in result) {
    return result.title;
  }

  return result.name;
}

// 4. is: 타입 확정에 쓰임 (타입 가드 함수)

// function 타입가드(변수: any): 변수 is 특정타입 {
//   return 조건식;
// }

function isTrack(result: SearchResult): result is Track {
  // result 타입은 무조건 Track
  // as는 Track이라고 가정을 하는 중이다.
  return (result as Track).title !== undefined;
}

function isArtist(result: SearchResult): result is Artist {
  // boolean이 되면 안되는 이유
  return (result as Artist).name !== undefined;
}

function printInfo(result: SearchResult) {
  if (isTrack(result)) {
    console.log(result.title);
  } else if (isArtist(result)) {
    console.log(result.name);
  }
}

// 유니온 단점: 아래와 같이 두 타입중 하나가 아닌 하나의 타입이 되어버린다.
const result: Track | Artist = {
  type: "track", // 추가 했을 떄 아래 코드를 끝까지 읽는다
  title: "hello",
  releaseDate: "2025",
  // type을 설정하지 않았을 때는 컴퓨터는 위에 코드까지만 읽고 Track 타입이라 가정하고 있다.
  name: "john",
  debutDate: "2026",
};
// 해결 방법
// 1. type 리터럴 설정
// type Track = {
//   type: "track", // 리터럴 타입
//   title: string,
//   releaseDate: string,
// }

// type Artist = {
//   type: "artist", // 리터럴 타입
//   name: string,
//   debutDate: string
// }

type LastUnionType = Track | Artist | Radio;

interface Radio {
  type: "radio";
  title: string;
  numberOfSongs: number;
}

//
function getTypeName(result: LastUnionType): string {
  if (result.type === "track") return "트랙";
  else if (result.type === "artist") return "아티스트";
    exhaustiveCheck(result);
    return "결과";
  }
}

// 모든 타입을 체크하는 함수
function exhaustiveCheck(param: never): never {
  throw new Error("에러");
}
