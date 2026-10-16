// 1. 조건부 타입

type IsString<T> = T extends string ? "yes" : "no";

type result1 = IsString<number>; // "no"
type result2 = IsString<string>; // "yes"

// 2. mapped type

type Movie2 = {
  title: string;
  genre: string;
  rate: number;
};

type Subset<T> = {
  [K in keyof T]?: T[K];
};

interface Pair<T, U> {
  first: T;
  second: U;
  display(): void;
  display2?: () => void;
}

function generic() {
  const movie1: Subset<Movie2> = { title: "기생충", genre: "액션" };
  const movie2: Subset<Movie2> = { rate: 2 };

  const pair: Pair<string, number> = {
    first: "hello",
    second: 123,
    display() {
      console.log(this.first + "는 " + this.second + "살 입니다.");
    },
  };
  pair.display(); // hello는 123살 입니다.
}
