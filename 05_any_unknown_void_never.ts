function AnyUnknownVoidNever() {
// any 모든 타입 가능
// unknown 모든 타입 가능, 하지만 타입 체크 필요
  let a: unknown = 3;
  a = "john";
  // a가 any일 경우 문제 없이 할당 가능 any는 string이던 뭐든 문제가 없다
  // a가 unknown일 경우 타입 체크 필요. unknown은 string이던 뭐든 문제가 발생한다.
  let b: string = a

  let anyType: any = "hello";
  let unknownType: unknown = "hello";

  console.log(anyType.toUpperCase());
  if(typeof unknownType === "string") {
    console.log(unknownType.toUpperCase());
  }

// void: 반환 값이 없는 함수
  // 많이 사용하지는 않는다.
  function double(a, b):void {
    console.log(a, b);
  }
  // 사용 예시
  interface NewType {
    double: (a: number, b: number) => void;
  }
// never: 절대 반환 값이 없는 함수
  function infinite():never {
    while(true) {
      console.log("infinite");
    }
  }
  function throwError():never {
    throw new Error("항상 에러를 던집니다.");
  }

  // A 혹은 B 중 하나만 오게 만들고 싶은데 유니온(|)으로 만들면 둘 다 올 수 있기 때문에 B에 never처리를 하여 둘 중 하나만 올 수 있게 만든다.
  type AorB = {a:number, b?:never} | {b:number, a?:never};
  let c:AorB = {a: 3, b: 4}
}