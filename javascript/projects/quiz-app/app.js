// 선택자 관리
const startBtn = document.querySelector("#start-btn");
const viewStart = document.querySelector("#view-start");
const viewQuiz = document.querySelector("#view-quiz");
const selectCount = document.querySelector("#select-count");
const progress = document.querySelector("#progress");
const timer = document.querySelector("#timer");
const quizBox = document.querySelector("#quiz-box");
const submitBtn = document.querySelector("#submit-btn");
const viewResult = document.querySelector("#view-result");
const restartBtn = document.querySelector("#restart-btn");

// 이벤트 관리
startBtn.addEventListener("click", async () => {
  viewStart.setAttribute("style", "display: none");
  viewQuiz.setAttribute("style", "display: block");

  const quiz = await fetchQuiz();
  const selectedQuiz = getRandomUniqueNumbers(quiz, selectCount.value);
  console.log(selectedQuiz);

  let curProgress = 1;
  for (const sq of selectedQuiz) {
    progress.textContent = `문제 ${curProgress} / ${selectCount.value}`;

    const timerArr = makeTimeArr(sq.timeLimit);
    console.log(timerArr);

    timerArr.forEach((time, index) => {
      setTimeout(() => {
        timer.textContent = `남은 시간: ${time}s`;
      }, index * 1000);
    });

    const quizTitle = document.createElement("b");
    quizTitle.textContent = sq.question;
    quizBox.appendChild(quizTitle);

    sq.choices.forEach((choice) => {
      const label = document.createElement("label");
      const quizChoice = document.createElement("input");
      const span = document.createElement("span");
      quizChoice.setAttribute("type", "radio");
      quizChoice.setAttribute("name", "choice");

      span.textContent = choice;
      label.appendChild(quizChoice);
      label.appendChild(span);

      quizBox.appendChild(label);
    });

    quizBox.addEventListener("change", (e) => {
      if (e.target.tagName === "INPUT") {
        submitBtn.disabled = false;
      }
    });

    await waitForClick();
    curProgress++;
    submitBtn.disabled = true;
    quizBox.innerHTML = "";
  }

  viewQuiz.setAttribute("style", "display: none");
  viewResult.setAttribute("style", "display: block");
});

restartBtn.addEventListener("click", () => {
  viewResult.setAttribute("style", "display: none");
  viewStart.setAttribute("style", "display: block");
});

// 함수 관리
async function fetchQuiz() {
  try {
    const res = await fetch("./data/questions.json");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("문제 로딩 에러", err);
  }
}

function getRandomUniqueNumbers(quiz, count) {
  // Fisher–Yates 셔플
  for (let i = quiz.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
  }

  return quiz.slice(0, count);
}

async function waitForClick() {
  return new Promise((resolve) => {
    submitBtn.addEventListener("click", resolve, { once: true });
  });
}

function makeTimeArr(time) {
  const arr = [];
  for (let i = time; i >= 0; i--) {
    arr.push(i);
  }

  return arr;
}
