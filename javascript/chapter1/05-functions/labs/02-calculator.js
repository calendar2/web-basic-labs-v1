// TODO: add, subtract, multiply, divide 함수 만들고 결과 출력
function operate(a, b, operator) {
  return operator(a, b);
}

operate(1, 2, (a, b) => console.log(a + b));
operate(3, 2, (a, b) => console.log(a - b));
operate(1, 2, (a, b) => console.log(a * b));
operate(4, 2, (a, b) => console.log(a / b));
