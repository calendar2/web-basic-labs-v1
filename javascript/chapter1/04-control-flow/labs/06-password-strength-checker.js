/* 사용자가 입력한 비밀번호가 다음 조건을 만족하는지 확인하고 모든 조건 만족 시 "강한 비밀번호", 아니면 부족한 항목을 명시하세요.
조건:
- 길이 8자 이상
- 대문자 1개 이상
- 숫자 1개 이상
- 특수문자 1개 이상 (!@#$%^&*)
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("비밀번호를 입력해주세요. ", (input) => {
  pwd = input.toString();
  const len = pwd.length;
  const upperCheck = /[A-Z]/.test(pwd);
  const numberCheck = /[0-9]/.test(pwd);
  const check = /[!@#$%^&*]/.test(pwd);

  if (len < 8) {
    console.log("길이가 8자 이상이어야 합니다.");
  }

  if (!upperCheck) {
    console.log("대문자를 반드시 포함해주세요!");
  }

  if (!numberCheck) {
    console.log("숫자를 반드시 포함해주세요!");
  }

  if (!check) {
    console.log("특수문자를 반드시 포함해주세요!");
  }

  if (len >= 8 && check && upperCheck && numberCheck) {
    console.log("강한 비밀번호!");
  }
  rl.close();
});
