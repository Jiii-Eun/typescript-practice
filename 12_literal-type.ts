// 리터럴(문자 그대로) 타입은? 내가 정한 문자를 타입으로 만든다.

type Direction = "left" | "right";
type Margin = `margin-${Direction}`;

function literalType() {
  let direction: "left" | "right";
  direction = "left";

  let margin: Margin;
  margin = "margin-left";
}
