const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTc1MDZjZjBmOTFjMmI3Y2RlNjdiOGE2NTgwYzI2OCIsInN1YiI6IjY1MmY0NDhkZWE4NGM3MDBlYmEzYjFkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-vzMQ9PdqiDFTsEMrEbNqrjFOV8O5xmFnbN0HHOaR6I'
  }
};


// let movieTitle = []
// let movieId = []


// const fetchMovieInfo = async () => {
//   try {
//     const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1');
//     const jsonData = await response.json();
//     let results = jsonData.results;

//     results.forEach(a => {
//       movieTitle.push(a['title'])
//       movieId.push(a["id"])
//     });

//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchMovieInfo();



// TODO: then -> async/await 바꾸는법?!
// TODO: 팀프로젝트할때 변수명 통일하기 (snake, *camel)




async function logJSONData() {
  const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1');
  const jsonData = await response.json();
  const results = jsonData.results;

  let tempHtml = ``
  let movies = document.querySelector("section");
  let search = document.querySelector("#submit");

  for (let a in results) {
    tempHtml = ` 
      <div class="movie-card" id="${results[a]["id"]}">
      <img src="https://image.tmdb.org/t/p/w500/${results[a]["poster_path"]}">
      <h3 class="movie-title">${results[a]["title"]}</h3>
      <p>${results[a]["overview"]}</p>
      <br/>
      <p>Rationg: ${results[a]["vote_average"]}</p>   
      </div>
      `

    movies.innerHTML += tempHtml;



  }

  //search
  const searchInput = document.getElementById("searchInput");

  search.addEventListener("click", () => {
    const searchText =  searchInput.value;
    const filteredResults = results.filter((a) => a["title"].toUpperCase() == searchText.toUpperCase());
    
    // 1번 시도
    // function filterItems(arr, query) {
    //   return arr.filter((e) => e.toUpperCase().includes(query.toUpperCase()));
    // }
    // const filteredResults = filterItems(results, searchText);  

    // 2번
    // filterItems((a, searchText)=> a["title"].toUpperCase().include(searchText.toUpperCase())); 

    // 3번
    // function filterItems(results, searchText){ 
    //  return results.filter((a) => a["title"].toLowerCase().include(searchText.toLowerCase()));
    // }
    //results.filter((a, searchText)=> a["title"].toUpperCase().include(searchText.toUpperCase()));
    
    movies.innerHTML = "";




    for (let a in filteredResults) {
      tempHtml = ` 
        <div class="movie-card" id="${filteredResults[a]["id"]}">
        <img src="https://image.tmdb.org/t/p/w500/${filteredResults[a]["poster_path"]}">
        <h3 class="movie-title">${filteredResults[a]["title"]}</h3>
        <p>${filteredResults[a]["overview"]}</p>
        <br/>
        <p>Rationg: ${filteredResults[a]["vote_average"]}</p>   
        </div>
        `
  
      movies.innerHTML += tempHtml;
  
    }

  })


};





function Search() {
  // const searchtext = searchInput.value;
  // console.log(searchtext);

  
  //response 값이 담기질 않음 
//   fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
// .then(response => response.json())
// .then(response => console.log(response.results))
// .catch(err => console.error(err));
// const results = response.results;


  // let tempHtml = ``

  // for (let a in results) {
  //   if (results[a].filter() === searchtext) {
  //     tempHtml = ` 
  //     <div class="movie-card" id="${results[a]["id"]}">
  //     <img src="https://image.tmdb.org/t/p/w500/${results[a]["poster_path"]}">
  //     <h3 class="movie-title">${results[a]["title"]}</h3>
  //     <p>${results[a]["overview"]}</p>
  //     <br/>
  //     <p>Rationg: ${results[a]["vote_average"]}</p>   
  //     </div>
  //     `

  //     movies.innerHTML += tempHtml;
  //   }


  }


logJSONData();

