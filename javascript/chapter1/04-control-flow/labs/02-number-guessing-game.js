// 문제: 사용자가 정답 숫자를 맞힐 때까지 계속 입력받는 게임을 만들어보세요. (while 사용)
// Math.random()으로 1~10 중 하나를 고르고 맞힐 때까지 반복

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const num = Math.floor(Math.random() * 10) + 1;

function ask() {
  rl.question("1 ~ 10 사이의 숫자 중 정답은? ", (ans) => {
    const guess = Number(ans);

    if (guess === num) {
      console.log("정답입니다!");
      rl.close();
    } else if (guess < num) {
      console.log("UP!");
      ask();
    } else {
      console.log("DOWN!");
      ask();
    }
  });
}

ask(); // 시작
