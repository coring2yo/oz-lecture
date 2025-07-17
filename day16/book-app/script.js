// 도서 배열 전역 선언
let books = [];

// 도서 추가 함수 (수정하지 않음)
function addBook() {
  const titleInput = document.getElementById('title');
  const priceInput = document.getElementById('price');
  const title = titleInput.value.trim();
  const price = parseInt(priceInput.value, 10);

  if (!title || isNaN(price) || price <= 0) {
    alert('유효한 제목과 가격을 입력하세요.');
    return;
  }

  const book = { title, price };
  books.push(book);

  const li = document.createElement('li');
  li.className = 'book-item';

  const span = document.createElement('span');
  span.textContent = `${title} - ${price}원`;

  const button = document.createElement('button');
  button.textContent = '삭제';
  button.onclick = function () {
    removeBook(button);
  };

  li.appendChild(span);
  li.appendChild(button);
  document.getElementById('book-list').appendChild(li);

  titleInput.value = '';
  priceInput.value = '';
}

// 도서 삭제 함수
function removeBook(button) {
  const li = button.parentElement;
  const span = li.querySelector('span');
  const text = span.textContent;

  // 텍스트에서 제목만 추출 (예: "책1 - 5000원")
  const title = text.split(' - ')[0];

  // books 배열에서 해당 제목 제거
  books = books.filter(book => book.title !== title);

  // DOM에서 요소 제거
  li.remove();
}

// 도서 데이터 처리 함수
function processBooks() {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  // 제목 앞에 'Book: ' 붙이기 (map)
  const mappedTitles = books.map(book => `Book: ${book.title} - ${book.price}원`);

  // 10000원 이상 도서 필터링
  const expensiveBooks = books.filter(book => book.price >= 10000);

  // 도서 총 가격 계산 (reduce)
  const totalPrice = books.reduce((sum, book) => sum + book.price, 0);

  // 결과 표시
  const upperList = document.createElement('ul');
  mappedTitles.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    upperList.appendChild(li);
  });

  const expensiveList = document.createElement('ul');
  expensiveBooks.forEach(book => {
    const li = document.createElement('li');
    li.textContent = `Book: ${book.title} - ${book.price}원`;
    expensiveList.appendChild(li);
  });

  resultsDiv.innerHTML = `
    <h3>상위 가격 도서:</h3>
  `;
  resultsDiv.appendChild(upperList);

  resultsDiv.innerHTML += `<h3>고가 도서:</h3>`;
  resultsDiv.appendChild(expensiveList);

  resultsDiv.innerHTML += `<h3>총 가격:</h3><p>${totalPrice}원</p>`;
}
