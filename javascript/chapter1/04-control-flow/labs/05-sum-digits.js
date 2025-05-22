// TODO: prompt로 입력받은 숫자의 각 자릿수 합을 구하도록 while 루프를 사용하여 작성하세요.

let num = prompt("숫자를 입력해주세요.");

let res = 0;
while (num > 0) {
  const lastNum = num % 10;
  res += lastNum;
  num = (num - lastNum) / 10;
}

alert(`입력한 숫자의 각 자릿수의 합은 ` + res);
