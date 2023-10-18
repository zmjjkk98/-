const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzA0YjFlZmFiMGFiZDgyYTM3NDFiZjIxMzYxNjkwMSIsInN1YiI6IjY1MmY0NDhkZWE4NGM3MDBlYmEzYjFkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q2ESa60IBH_Moq3ONA7euXKchF5DGai53qJ2DYzmVfo'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    