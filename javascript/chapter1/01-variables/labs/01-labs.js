// [문제] 다음 코드에서 오류가 나는 줄을 주석으로 표시하고, 수정해보세요.
// 목표: var / let / const의 스코프 차이 이해

function scopePractice() {
  if (true) {
    var x = 10;
  }
  let y = 20;
  const z = 30;

  console.log("x:", x); // 함수 스코프
  console.log("y:", y); // 블록 스코프
  console.log("z:", z); // 블록 스코프
}

scopePractice();
