const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTc1MDZjZjBmOTFjMmI3Y2RlNjdiOGE2NTgwYzI2OCIsInN1YiI6IjY1MmY0NDhkZWE4NGM3MDBlYmEzYjFkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-vzMQ9PdqiDFTsEMrEbNqrjFOV8O5xmFnbN0HHOaR6I'
  }
};


let url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
fetch(url, options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

// TODO: then -> async/await 바꾸는법?!
// TODO: 팀프로젝트할때 변수명 통일하기 (snake, *camel)

async function logJSONData() {
  const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1');
  const jsonData = await response.json();
  const results = jsonData.results;

  let tempHtml = ``
  let movies = document.querySelector("section");

  for (let a in results) {
    tempHtml = ` 
      <div class="movie-card" id="${results[a]["id"]}">
      <img src="https://image.tmdb.org/t/p/w500/${results[a]["poster_path"]}">
      <p>${results[a]["overview"]}</p>
      <p>${results[a]["vote_average"]}</p>   
      </div>
      `

    movies.innerHTML += tempHtml;

  }

};



logJSONData();


