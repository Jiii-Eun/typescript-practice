// record: 무슨 키 값, 필드, 필드의 타입 일지 모르는 상황이어서 타입을 정해줄 수 없을 때. 즉, 객체 타입이 동적일 때

// record는 객체타입이 될건데 이 객체의 키와 값이 무슨 타입인지 정해지지 않았다.
type StringNumberMap = Record<string, number>;

type FruitColor = Record<"apple" | "orange" | "mango", string>;

type UserRole = "admin" | "user" | "guest";

// 아래 두 타입의 차이는?
// 1번 타입일 경우 롤이 추가 될 때 마다 필드를 추가해줘야 한다.
// 2번 타입일 경우 롤이 추가 될 때 마다 필드가 자동으로 추가된다.

type RolePermission = {
  admin: string;
  user: string;
  guest: string;
};

type Rolepermission2 = Record<UserRole, string>;

type Product = { id: string; name: string; price: number };

type ProductInventory = Record<string, Product>;

function record() {
  const example: StringNumberMap = {
    apple: 10,
    orange: 20,
    mango: 30,
  };

  const fruitColor: FruitColor = {
    apple: "red",
    orange: "orange",
    mango: "green",
  };

  const inventoryResponse: ProductInventory = {
    apple: { id: "1", name: "apple", price: 1000 },
    orange: { id: "2", name: "orange", price: 2000 },
    mango: { id: "3", name: "mango", price: 3000 },
  };
}
