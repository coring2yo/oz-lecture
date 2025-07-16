// 위로 메시지 목록 (const)
const comfortMessages = [
  "힘들겠지만, 분명히 잘 될 거예요.",
  "지금은 힘들어도 곧 좋은 날이 올 거예요.",
  "당신은 혼자가 아니에요. 응원합니다!",
  "모든 어려움은 지나가고 성장으로 바뀔 거예요.",
  "작은 한 걸음도 큰 변화를 만듭니다. 힘내세요!",
];

// 함수 표현식으로 메인 로직 구현
const runChallenge = function () {
  const input = document.getElementById("postIds").value.trim();
  const output = document.getElementById("output");
  const button = document.getElementById("fetchPosts");

  output.innerHTML = "";
  output.classList.remove("error");

  // 입력 유효성 검사
  if (input === "") {
    output.classList.add("error");
    output.textContent = "고민을 입력해주세요!";
    return;
  }

  button.disabled = true; // 버튼 비활성화

  // 랜덤 위로 메시지 선택
  const randomIndex = Math.floor(Math.random() * comfortMessages.length);
  const message = comfortMessages[randomIndex];

  // 결과 출력
  output.textContent = `고민: ${input}\n위로: ${message}`;

  // 버튼 1초 후 재활성화 (사용자 경험을 위해 약간 딜레이)
  setTimeout(() => {
    button.disabled = false;
  }, 1000);
};

// 이벤트 리스너 등록
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("fetchPosts").addEventListener("click", runChallenge);
});
