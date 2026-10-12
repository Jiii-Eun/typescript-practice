function object() {
  // 객체
  let b: { readonly name: string; age?: number } = { name: "John" };
  let c: { name: string; age: number } = { name: "John", age: 20 };

  // b.name = "Jane"; // error

  // 배열
  let fruits: string[] = ["apple", "banana", "cherry"];

  let numbers: Array<number> = [1, 2, 3];

  let students: { name: string; age: number }[] = [
    { name: "John", age: 20 },
    { name: "Jane", age: 21 },
  ];

  // 튜플: 길이, 아이템 제한
  let tuple: [string, number] = ["John", 20];

  let people: [string, number][] = [
    ["John", 20],
    ["Jane", 21],
  ];
}
