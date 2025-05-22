// 문제 : 짝수 인지 홀수인지 여부를 판단하는 함수를 작성하세요.
// TODO: checkEvenOdd(num) → 짝수면 Even, 홀수면 Odd 반환
function checkEvenOdd(num) {
  return num % 2 ? "Odd" : "Even";
}

console.log(checkEvenOdd(2));
console.log(checkEvenOdd(3));
