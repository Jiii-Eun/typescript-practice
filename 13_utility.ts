// 유용한 함수(?)

// 1. Omit: 뺀다

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  age: number;
  address: string;
}

interface publicUser {
  id: number;
  name: string;
  email: string;
  age: number;
}

// User 타입에서 password 필드를 제외한 타입을 만들어준다.
type PublicUser = Omit<User, "password" | "age">;

function omit() {
  let userProfile: PublicUser = {
    id: 4315,
    name: "John",
    email: "john@example.com",
    address: "Seoul",
    password: "123456", // 이 필드는 제외되었기 때문에 오류가 발생한다.
    age: 20,
  };
}

// 2. Pick: 선택

interface BasicUserInfo {
  id: number;
  name: string;
}

type BasicUserInfo = Pick<User, "id" | "name">;

// 3. partial: 모든 필드를 부분적으로 변경, (street?: string과 같이 되는 효과가 있다.)

interface Address {
  street: string;
  city: string;
  country: string;
}

function partial() {
  const updateAddress = (address: Partial<Address>) => {
    console.log(address);
  };
}
