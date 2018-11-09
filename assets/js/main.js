$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
    let searchText = $('#searchText').val();
    getMovies(searchText);
    e.preventDefault();
  });
});

function getMovies(searchText){
  axios.get('http://www.omdbapi.com?s='+searchText)
    .then((response) => {
      console.log(response);
      let movies = response.data.Search;
      let output = '';
      $.each(movies, (index, movie) => {
        output += `
          <div class="col-md-3">
            <div class="well text-center">
              <img src="${movie.Poster}">
              <h5>${movie.Title}</h5>
              <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-danger" href="#">Movie Details</a>
            </div>
          </div>
        `;
      });

      $('#movies').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}

function movieSelected(id){
  sessionStorage.setItem('movieId', id);
  window.location = 'movie.html';
  return false;
}

function getMovie(){
  let movieId = sessionStorage.getItem('movieId');

  axios.get('http://www.omdbapi.com?i='+movieId)
    .then((response) => {
      console.log(response);
      let movie = response.data;

      let output =` 
           <div class="row">
             
          <div class="well">
                  
            <h3>Plot</h3>
            <div>
            ${movie.Plot}
            </div>
            <hr>
            <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-danger">View in IMDB</a>
            
          </div>
        </div>
        <div class="row">
        <div class="col-md-8" style="background: gold">
            <h2>${movie.Title}</h2>
            <ul class="list-group">
            <li class="list-group-item"><strong>Movie Director:</strong> ${movie.Director}</li>
              <li class="list-group-item"><strong>Movie Writer:</strong> ${movie.Writer}</li>
              <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
              <li class="list-group-item"><strong>Release date:</strong> ${movie.Released}</li>
              <li class="list-group-item"><strong>Rated Category:</strong> ${movie.Rated}</li>
              <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
              
              <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
            </ul>
          </div>
          <div class="col-md-4" style="background: deepskyblue">
          <hr>
            <img src="${movie.Poster}" class="thumbnail">
          </div>
          <a href="indexmovie.html" class="btn btn-default"> Back To Homepage</a>
        </div>
      
      `;

      $('#movie').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}
