// 도서 및 대여 상태 배열
const books = [];
const rentals = [];

// 도서 추가
function addBook() {
    const titleInput = document.getElementById('bookTitle');
    const priceInput = document.getElementById('bookPrice');
    const title = titleInput.value.trim();
    const price = Number(priceInput.value);

    if (!title || isNaN(price) || price <= 0) {
        alert('도서 제목과 유효한 가격을 입력하세요!');
        return;
    }

    books.push({ title, price });
    rentals.push(createBookRental(title));

    const li = document.createElement('li');
    li.className = 'book-item';
    li.innerHTML = `
        <span>${title} - ${price}원 (대여 가능)</span>
        <button onclick="removeBook(this)">삭제</button>
        <button onclick="toggleRental(this)">대여/반납</button>
    `;
    document.getElementById('bookList').appendChild(li);

    titleInput.value = '';
    priceInput.value = '';
}

// 도서 삭제
function removeBook(button) {
    const li = button.parentElement;
    const text = li.querySelector('span').textContent;
    const title = text.split(' - ')[0];

    const index = books.findIndex(book => book.title === title);
    if (index !== -1) {
        books.splice(index, 1);
        rentals.splice(index, 1);
    }

    li.remove();
}

// 도서 데이터 처리
function processBooks() {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    const prefixedBooks = books.map(book => ({
        title: `Book: ${book.title}`,
        price: book.price
    }));

    const highPriceBooks = books.filter(book => book.price >= 10000);

    const totalPrice = books.reduce((acc, book) => acc + book.price, 0);

    let html = '<h3>상위 가격 도서:</h3><ul>';
    prefixedBooks.forEach(book => {
        html += `<li>${book.title} - ${book.price}원</li>`;
    });
    html += '</ul>';

    html += '<h3>고가 도서:</h3><ul>';
    highPriceBooks.forEach(book => {
        html += `<li>${book.title} - ${book.price}원</li>`;
    });
    html += '</ul>';

    html += `<h3>총 가격:</h3><p>${totalPrice}원</p>`;
    resultsDiv.innerHTML = html;
}

// 클로저: 대여 상태 관리
const createBookRental = (bookTitle) => {
    let isBorrowed = false;
    let borrowCount = 0;
    return {
        borrow: () => {
            if (isBorrowed) {
                alert(`${bookTitle}은 이미 대여 중입니다.`);
                return false;
            }
            isBorrowed = true;
            borrowCount++;
            return true;
        },
        returnBook: () => {
            isBorrowed = false;
        },
        getStatus: () => ({
            title: bookTitle,
            isBorrowed,
            borrowCount
        })
    };
};

// 대여/반납 토글
function toggleRental(button) {
    const li = button.parentElement;
    const text = li.querySelector('span').textContent;
    const title = text.split(' - ')[0];

    const rental = rentals.find(r => r.getStatus().title === title);
    const book = books.find(b => b.title === title);

    if (!rental || !book) return;

    const status = rental.getStatus();

    if (status.isBorrowed) {
        rental.returnBook();
        li.querySelector('span').textContent = `${title} - ${book.price}원 (대여 가능)`;
    } else {
        if (rental.borrow()) {
            li.querySelector('span').textContent = `${title} - ${book.price}원 (대여 중)`;
        }
    }
}

// 전체 대여 상태 표시
function showAllRentalStatus() {
    const resultsDiv = document.getElementById('results');
    let html = '<h3>대여 상태:</h3><ul>';

    if (rentals.length === 0) {
        html += '<li>대여 정보가 없습니다.</li>';
    } else {
        rentals.forEach(rental => {
            const { title, isBorrowed, borrowCount } = rental.getStatus();
            html += `<li>${title}: ${isBorrowed ? '대여 중' : '대여 가능'}, 대여 횟수: ${borrowCount}</li>`;
        });
    }

    html += '</ul>';
    resultsDiv.innerHTML = html;
}
