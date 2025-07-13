// 기본 장르 설정용 const
const defaultGenre = "Unknown";

// 영화 객체를 저장할 배열
let movies = [];

// var 예제: 영화 개수를 세는 용도
var movieCount = 0;

// 영화 객체 3개 하드코딩
let movie1 = { title: "The Matrix", director: "Wachowskis", year: 1999, genre: "Sci-Fi" };
let movie2 = { title: "Inception", director: "Nolan", year: 2010, genre: "Sci-Fi" };
let movie3 = { title: "Parasite", director: "Bong", year: 2019 }; // 장르 빠짐 (기본값 처리 예제)

// 영화 추가 (기본값 처리 포함)
function addMovie(movie) {
  if (!movie.title) movie.title = "Unknown";
  if (!movie.director) movie.director = "Unknown";
  if (!movie.year) movie.year = 0;
  if (!movie.genre) movie.genre = defaultGenre;
  movies.push(movie);
  movieCount++;
}

// ...rest를 활용한 영화 여러 개 추가
function addMovies(...movieList) {
  for (let m of movieList) {
    addMovie(m);
  }
}

// 영화 목록 출력 함수 (함수 선언문 사용)
function printMovies(movieArray) {
  console.log("Movie Collection:");
  for (let i = 0; i < movieArray.length; i++) {
    const movie = movieArray[i];
    console.log(
      `${i + 1}. Title: ${movie.title}, Director: ${movie.director}, Year: ${movie.year}, Genre: ${movie.genre}`
    );
  }
  console.log(`Total Movies: ${movieArray.length}`);
}

// 장르로 영화 검색
function searchByGenre(genre) {
  const results = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].genre.toLowerCase() === genre.toLowerCase()) {
      results.push(movies[i]);
    }
  }
  if (results.length === 0) {
    console.log(`No movies found for genre: ${genre}`);
  } else {
    console.log(`${genre} Movies:`);
    printMovies(results);
  }
}

// 평균 연도 계산 (함수 표현식)
const calculateAverageYear = function (movieArray) {
  if (movieArray.length === 0) return 0;
  let total = 0;
  for (let i = 0; i < movieArray.length; i++) {
    total += movieArray[i].year;
  }
  return Math.round(total / movieArray.length);
};

// 가장 최신 영화 찾기 (화살표 함수)
const findNewestMovie = (movieArray) => {
  if (movieArray.length === 0) return null;
  let newest = movieArray[0];
  for (let movie of movieArray) {
    if (movie.year > newest.year) {
      newest = movie;
    }
  }
  return newest;
};

// === 실행 ===
addMovies(movie1, movie2, movie3); // 영화 배열에 추가
printMovies(movies);               // 전체 목록 출력

// 도전 과제 실행
searchByGenre("Sci-Fi");

console.log("\nStatistics:");
console.log(`Average Year: ${calculateAverageYear(movies)}`);
const newest = findNewestMovie(movies);
if (newest) {
  console.log(`Newest Movie: ${newest.title} (${newest.year})`);
}
