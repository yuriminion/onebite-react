const x = 15;
const y = 20;

let max = x > y ? x : y; // 조건식 ? 참 반환값 : 거짓 반환값
console.log(max);

const a = true;

switch (typeof a) {
  case "number": {
    console.log("숫자");
    break;
  }
  case "string": {
    console.log("문자열");
    break;
  }
  case "boolean": {
    console.log("불리언");
    break;
  }
}

let temp = 10;

if (temp < 0) {
  console.log("매우 추움");
} else if (temp < 10) {
  console.log("추움");
} else if (temp < 20) {
  console.log("적당");
} else {
  console.log("더움");
}
