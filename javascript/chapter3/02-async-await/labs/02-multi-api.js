/*
[문제] 두 개의 외부 API를 fetch로 병렬 처리한 뒤, 둘의 결과를 모두 출력하세요.

1) https://jsonplaceholder.typicode.com/posts/2
2) https://jsonplaceholder.typicode.com/users/1

- async/await와 Promise.all을 활용
- 두 API 모두의 데이터를 받아서 각각 출력
*/
async function fetchApi() {
  try {
    const promises = [
      fetch("https://jsonplaceholder.typicode.com/posts/2"),
      fetch("https://jsonplaceholder.typicode.com/posts/1"),
    ];

    console.log("요청 시작...");
    const res = await Promise.all(promises);
    const data = await Promise.all(res.map((r) => r.json()));
    console.log("모든 작업 완료: ", data);
  } catch (err) {
    console.error("에러:", err);
  }
}

fetchApi();
