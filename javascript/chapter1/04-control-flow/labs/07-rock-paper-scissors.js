/* 
사용자와 컴퓨터가 가위바위보 게임을 합니다.
사용자는 "가위", "바위", "보" 중 하나를 입력하고, 컴퓨터는 무작위로 선택합니다.
3판 2선승제로 승부를 결정하세요.

-- 출력 예시 -- 

[1라운드]
당신의 선택: 가위
컴퓨터의 선택: 보
당신이 이겼습니다! (1승 0패)

[2라운드]
당신의 선택: 보
컴퓨터의 선택: 바위
당신이 이겼습니다! (2승 0패)

🎉 게임 종료: 당신의 승리입니다!

Math.random() - 난수 생성 함수
*/

let computerPoint = 0;
let userPoint = 0;
const rockScissorPaper = {
  0: "가위",
  1: "바위",
  2: "보",
};
let round = 0;
let result = 0; // 0: 무승부, 1: 승리, 2: 패배

while (computerPoint < 2 && userPoint < 2) {
  round += 1;
  const userChoise = prompt("가위, 바위, 보 중 선택해주세요.");
  const computerChoise = Math.floor(Math.random() * 3);

  // 승패 결정
  if (userChoise === "가위") {
    if (computerChoise === 0) {
      result = 0;
    } else if (computerChoise === 1) {
      result = 2;
      computerPoint += 1;
    } else {
      result = 1;
      userPoint += 1;
    }
  } else if (userChoise === "바위") {
    if (computerChoise === 1) {
      result = 0;
    } else if (computerChoise === 2) {
      result = 2;
      computerPoint += 1;
    } else {
      result = 1;
      userPoint += 1;
    }
  } else {
    if (computerChoise === 2) {
      result = 0;
    } else if (computerChoise === 0) {
      result = 2;
      computerPoint += 1;
    } else {
      result = 1;
      userPoint += 1;
    }
  }

  alert(`
    [${round}라운드]
    당신의 선택: ${userChoise}
    컴퓨터의 선택: ${rockScissorPaper[computerChoise]}
    ${
      result === 0
        ? "무승부입니다!"
        : result === 1
        ? "당신이 이겼습니다!"
        : "당신이 졌습니다!"
    } (${userPoint}승 ${computerPoint}패)
  `);
}
