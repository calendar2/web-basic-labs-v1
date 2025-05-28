/*
[문제] async/await를 활용해
- 1초 대기(지연) 후 "대기 완료"를 출력하는 코드를 작성하세요.

[힌트]
- delay(ms) 함수는 Promise로 만들어도 됨
- await delay(1000) 후 console.log()
*/
function delay(ms) {
  return new Promise((res) => {
    setTimeout(() => {
      res("대기 완료");
    }, ms);
  });
}

async function callDelay() {
  try {
    console.log("지금부터 1초 대기");

    const res = await delay(1000);
    console.log(res);
  } catch (err) {
    console.log("에러 발생: ", err);
  }
}

callDelay();
