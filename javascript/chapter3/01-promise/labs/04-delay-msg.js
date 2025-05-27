// [문제] Promise객체를 이용해 ms초 후에 문자열 msg를 출력하는 비동기 함수를 작성해보세요.
function asyncFunc() {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("msg");
    }, 500);
  });
}

asyncFunc();
console.log("결과");
