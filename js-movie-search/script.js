// 본인의 API 키를 넣어주셔야 합니다.
const API_KEY = '02bf7eeb76ad14e4db3c689d31deefcc';
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${02bf7eeb76ad14e4db3c689d31deefcc}& language=en - US & page=1`;

fetch(URL)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let title = data['original_title'];
    $('#title').text(title);

    let overview = data['overview'];
    $('#overview').text(overview);

    let poster_path = data['poster_path']; $('#poster_path').text(poster_path);

    let vote_average = data['vote_average'];
    $('#vote_average').text(vote_average);
  })
  .catch(error => console.error('Error:', error))
