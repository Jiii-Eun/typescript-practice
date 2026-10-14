type TProduct = {
  id: string;
  name: string;
  price: number;
};

type TDiscountProduct = TProduct & {
  discountRatio: number;
};

interface IProduct {
  id: string;
  name: string;
  price: number;
}

interface IDiscountProduct extends IProduct {
  discountRatio: number;
}

// ------------------------------
type Popularity = {
  rate: number;
};

interface Review {
  rate: string;
}

// 중복되는 rate의 에러 발생시킴으로써 에러를 컴파일 단계에서 잡아낼 수 있음
// type ㅇ, 사용하는 코드에서 에러
type Filter = Popularity & Review;

// 타입을 만들때부터 중복되는 타입을 방지할 수 있음
// type x
interface IFilter extends Popularity, Review {}

function ExtendsAnd() {
  let filter: Filter = {
    rate: 2.3,
    review: 3,
  };
}
