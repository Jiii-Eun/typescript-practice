//

interface Track {
  title: string;
  releaseDate: string;
}

interface Artist {
  name: string;
  debutYear: number;
}

// 유니온 타입의 함정을 피하기 위한 방법 + 1
type SearchItem<T extends "track" | "artist"> = T extends "track"
  ? Track
  : Artist;

function extendsFn() {
  // 트랙 타입
  const result: SearchItem<"track"> = {
    title: "hey",
    releaseDate: "2024",
    name: "jason",
    debutYear: 2,
  };
}

// infer 타입 추론해줘
// 함수의 리턴 값이 어떤 값이 올지 모를 때 추론해서 알아서 사용해줘 라는 의미

type ReturnTypeOfFunction<T> = T extends (...args: any[]) => infer R
  ? R
  : never;

function getUserInfo() {
  return { name: "jason", age: 20 };
}

// 제네릭의 T는 타입만 넣을 수 있어 함수만 집어넣게 되면 에러가 발생한다
// 따라서 함수의 타입만 가져오기 위해 typeof를 사용해준다.

type UserInfo = ReturnTypeOfFunction<typeof getUserInfo>;

// 비동기 호출에도 사용할 수 있다.
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type PromiseString = Promise<{
  id: number;
  name: string;
  age: number;
  gender: string;
}>;

type Result = UnwrapPromise<PromiseString>;

// 배열안에 있는 요소들을 추출할 때 사용할 수 있다.
type ElementType<T> = T extends (infer U)[] ? U : T;

type ArrayNumber = Artist[];

type SingleNumber = ElementType<ArrayNumber>;

// as 어떤 타입을 이거라고 정해줄 때 사용한다.
// 강력하게 타입을 확정 시켜준다.

function asFn() {
  let someValue: unknown = "Hello, world!";

  console.log(someValue.length);

  let newValue = someValue as string;

  console.log(newValue.length);

  const inputElement = document.querySelector("input"); // null 혹은 element
  inputElement.value = "gdgad";
  const input = inputElement as HTMLInputElement;
  input.value = "gdgad";

  // as를 남발하면 안된다 -> 아래 코드와 같이 에러가 발생해야하는 순간에 에러가 발생하지 않고 있을 수 있기 때문이다.
  // DOM이 아닌 경우 as를 사용하게 되면 '정말 as가 필요한 순간인가?' 를 한번 더 고민 해 봐야 한다.
  let numberCalue = value as number;
  numberCalue + 1;
}
