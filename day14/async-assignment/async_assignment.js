// 상수 선언 (const)
const MAX_TIME = 10;

// 메시지 변수 (var)
var timerMessage = "";

// 타이머 상태 변수 (let)
let timerCount;
let intervalId;

// 타이머 시작 함수 (기본값 10초)
function startTimer(seconds = 10) {
  const display = document.getElementById("timerDisplay");
  const startButton = document.getElementById("startTimer");

  timerCount = seconds;
  startButton.disabled = true;
  display.classList.remove("error");

  timerMessage = `타이머: ${timerCount}초`;
  display.textContent = timerMessage;

  // 1초 간격으로 타이머 감소
  intervalId = setInterval(() => {
    timerCount--;

    if (timerCount <= 0) {
      clearInterval(intervalId);
      timerMessage = "타이머 종료!";
      display.textContent = timerMessage;
      startButton.disabled = false;
    } else {
      timerMessage = `타이머: ${timerCount}초`;
      display.textContent = timerMessage;
    }
  }, 1000);
}

// 버튼 클릭 이벤트 처리
document.getElementById("startTimer").addEventListener("click", () => {
  const input = document.getElementById("timerInput").value;
  const display = document.getElementById("timerDisplay");
  const startButton = document.getElementById("startTimer");

  const seconds = Number(input);

  // 입력 유효성 검사
  if (isNaN(seconds) || seconds < 1 || seconds > MAX_TIME) {
    display.textContent = "유효한 숫자(1-10)를 입력하세요!";
    display.classList.add("error");
    startButton.disabled = false;
    return;
  }

  // 에러 제거 후 타이머 시작
  display.classList.remove("error");
  startTimer(seconds);
});
