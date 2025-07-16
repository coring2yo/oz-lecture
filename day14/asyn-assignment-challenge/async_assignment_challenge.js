// 게시물 여러 개 가져오기 (화살표 함수, ...rest 사용)
const fetchMultiplePosts = async (...ids) => {
  const result = {};

  for (const id of ids) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      if (!response.ok) throw new Error(`ID ${id} 요청 실패`);

      const data = await response.json();
      result[`post${id}`] = data.title;
    } catch (err) {
      result[`post${id}`] = `에러: ${err.message}`;
    }
  }

  return result;
};

// 메인 실행 함수 (함수 표현식)
const runChallenge = function () {
  const input = document.getElementById("postIds").value;
  const output = document.getElementById("output");
  const button = document.getElementById("fetchPosts");

  // 초기화
  output.innerHTML = "";
  output.classList.remove("error");

  // ID 입력 처리
  const rawIds = input.split(",").map(id => Number(id.trim()));

  // 유효성 검사
  if (
    rawIds.length === 0 ||
    rawIds.some(id => isNaN(id) || id < 1 || id > 100)
  ) {
    output.classList.add("error");
    output.innerHTML = "유효한 ID(1-100)를 입력하세요!";
    return;
  }

  button.disabled = true; // 버튼 비활성화

  // 데이터 가져오기 및 렌더링
  fetchMultiplePosts(...rawIds).then(result => {
    for (const key in result) {
      const div = document.createElement("div");
      div.className = "post";
      div.textContent = `${key}: ${result[key]}`;
      output.appendChild(div);
    }
  }).catch(err => {
    output.classList.add("error");
    output.innerHTML = `에러 발생: ${err.message}`;
  }).finally(() => {
    button.disabled = false; // 버튼 재활성화
  });
};

// 이벤트 리스너 등록
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("fetchPosts").addEventListener("click", runChallenge);
});
