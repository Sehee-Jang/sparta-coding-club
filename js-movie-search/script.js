// ----------------- 방법 1 -----------------
// 본인의 API 키를 넣어주셔야 합니다.
const API_KEY = '02bf7eeb76ad14e4db3c689d31deefcc';
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-US&page=1`; // 템플릿 리터럴 , 보간법: ${}을 사용하여 문자열 사이에 변수 삽입가능

// 영화 카드 생성 함수
function createMovieCard(movie) {
  const movieCard = document.createElement('li');
  movieCard.className = 'card';
  movieCard.innerHTML = `
    <a href="#" class="movie_list_info">
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.original_title}" class="poster">
      <div class="wrap" style="display:none; opacity: 1;">
        <h3 class="title">${movie.title}</h3>
        <div class="summary">${movie.overview}</div>
        <div class="score">
          <div class="preview">
            <p class="tit">관람평</p>
            <p class="number">${movie.vote_average}<span class="ir">점</span></p>   
          </div>
        </div>
      </div>
    </a>
  `;

  // 마우스 오버 및 마우스 아웃 이벤트 리스너 추가
  const movieListInfo = movieCard.querySelector('.movie_list_info');
  movieListInfo.addEventListener('mouseover', function () {
    this.querySelector('.wrap').style.display = 'block';
  });
  movieListInfo.addEventListener('mouseout', function () {
    this.querySelector('.wrap').style.display = 'none';
  });

  // 영화 카드 클릭 시 alert
  movieCard.addEventListener('click', () => alert(`Movie ID: ${movie.id}`));

  return movieCard;
}

// Fetch
fetch(URL)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const movies = data.results;
    const cardContainer = document.getElementById('cards');
    movies.forEach(movie => {
      const movieCard = createMovieCard(movie);
      cardContainer.appendChild(movieCard);
    });
  })
  .catch(error => console.error('Error:', error));

// 영화 제목 검색 구현
document.getElementById('search_button').addEventListener('click', () => {
  const query = document.getElementById('search_input').value.toLowerCase();
  const movieCards = document.querySelectorAll('.card');
  movieCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    if (title.includes(query)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

// 네비게이션 이벤트 리스너 추가
const navigation = document.querySelector('#nav > ul > li:nth-child(1) > a');
navigation.addEventListener('mouseover', function () {
  document.querySelector('#nav > ul > li').classList.add('ov');
});
navigation.addEventListener('mouseout', function () {
  document.querySelector('#nav > ul > li').classList.remove('ov');
});

// 스크롤시 헤더 고정
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const topOffset = header.offsetTop; // 헤더의 초기 위치 저장

  window.addEventListener("scroll", function () {
    if (window.scrollY > topOffset) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  });
});


// ----------------- FETCH 방법 2 -----------------
// 본인의 API 키를 넣어주셔야 합니다.
// const API_KEY = '02bf7eeb76ad14e4db3c689d31deefcc';
// const URL = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmJmN2VlYjc2YWQxNGU0ZGIzYzY4OWQzMWRlZWZjYyIsIm5iZiI6MTcyMTc4MTcyOS41MTU5NDcsInN1YiI6IjY2OWY2MDVlNzdiYjhiNWE1NDEwNDNmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1-KIB794QsuSm5AgY4PZLbhi2rBCHlQC48hlPvYVE3E' //API를 사용할 수 있는 권한을 얻음 ,, Bearer토큰의 소유자를 뜻함
//     }
// };
// fetch(URL, options)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         // let title = data['original_title'];
//         // $('#title').text(title);

//         // let overview = data['overview'];
//         // $('#overview').text(overview);

//         // let poster_path = data['poster_path']; $('#poster_path').text(poster_path);

//         // let vote_average = data['vote_average'];
//         // $('#vote_average').text(vote_average);
//     })
//     .catch(error => console.error('Error:', error))
