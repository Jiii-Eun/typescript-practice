// string
// number
// boolean
// null
// undefined
// ---
// symbol
// bigint

let a:number = 10;
a = 5;
// a = "5"; // string, error
let b:null = null; // 값이 없어야 함
let c:undefined = undefined; // 값이 없긴 한데 나중에 값이 정의가 될 수 있음

function dobble(n:number){
    return n * 2;
}

console.log(dobble(4));