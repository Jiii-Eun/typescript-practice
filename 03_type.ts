// interface, type

interface IStudent { //객체만 가능
  name: string;
  age?: number;
  isStudent?: boolean;
}

type TStudent = {
  name: string,
  age?: number,
  isStudent?: boolean
}

type NewType = number | string; // 원시 타입, 튜플타입도 가능. 주로 이럴경우 사용
type Tuple = [number, string, boolean];
// interface NewInterface { number | string }; // error, field가 있어야 사용 가능하다.
// interface를 쓰는 이유: class와 호환이 되기 때문에. 객체 타입일 경우 주로 사용
// interface 장점: 확장 단계가 더 잘 보임.
interface IPerson {
  name: string;
  age: number;
}
interface Iforeigner extends IPerson {
  nationality: string;
}

type Tforeigner = IPerson & {nationality: string};

function Type() {
  let b: IStudent = {name: "John", age: 20, isStudent: true};
  let c: TStudent = {name: "Jane", age: 13, isStudent: false};
  
  let american:Iforeigner = {name: "John", age: 20, nationality: "USA"};
}

