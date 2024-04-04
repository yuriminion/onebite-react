let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 200); // 120, 200 -> 인수

// 호이스팅, 함수 선언보다 호출이 먼저 되어도 오류가 발생하지 않는다.
// -> 끌어올리다 라는 뜻
function getArea(width, height) {
  // width, height -> 매개변수
  function another() {
    // 중첩 함수
    console.log("another");
  }

  another();
  let area = width * height;

  return area; // 반환값
}
