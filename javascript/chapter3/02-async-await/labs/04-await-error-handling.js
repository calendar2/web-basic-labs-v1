/*
[문제] fetch로 잘못된 URL을 요청해 에러가 발생할 때, try/catch로 에러를 잡고
"에러 발생:" 메시지와 함께 에러를 출력하세요.

- 예시 URL: https://jsonplaceholder.typicode.com/INVALID_URL
- async/await 사용
*/
async function catchError() {
  try {
    const res = await fetch("https://jsonplaceholde.typicode.com/INVALID_URL");
    const data = await res.json();
    console.log("요청 데이터: ", data);
  } catch (err) {
    console.log("에러 발생: ", err);
  }
}

catchError();
