$(document).ready(function () {
    var apiBaseUrl = 'http://api.themoviedb.org/3/'
    var apiKey = "2e376bf740e7fad570bcea7f7c980307";

    var searchMovieUrl = apiBaseUrl + 'search/movie?api_key=' + apiKey + '&language=en-US&page=1&include_adult=false&query=';
    var searchInput = '';
    $('#searchForm').on('submit', function (e) {
        e.preventDefault();
        searchInput = $('#searchText').val();
        var fullSearch = searchMovieUrl + searchInput;

        getMovies(fullSearch);
        e.preventDefault();
    });
});


function getMovies(searchText) {
    var imageBaseUrl = 'http://image.tmdb.org/t/p/'
    $.getJSON(searchText, function (movieSearched) {
        var searchedHTML = '';
        console.log(movieSearched);
        for (let i = 0; i < movieSearched.results.length; i++) {
            var posterSearched = imageBaseUrl + 'w300' + movieSearched.results[i].poster_path;
            var searchTitle = movieSearched.results[i].title;
            var searchDetails = movieSearched.results[i].overview;
            // searchedHTML += '<button type="button" class="btn invisible-btn" data-toggle="modal" data-target="#exampleModalTV' + i + '" data-whatever="@' + i + '"><img src="' + posterSearched + '"></button>'
            // searchedHTML += '<div class="modal fade" id="exampleModalTV' + i + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"><div class="modal-dialog" role="document"><div class="modal-content">'
            // searchedHTML += '<div class="searched-title">Title: ' + searchTitle + '</div>';
            // searchedHTML += '<div class="searched-overview">Overview: ' + searchDetails + '</div>';
            // searchedHTML += '</div></div></div>'

            searchedHTML += ` <div class="col-md-3">
            <div class="well text-center">
              <img src="${posterSearched}">
              <h5>${searchTitle}</h5>
              <a onclick="movieSelected('${searchDetails}')" class="btn btn-danger" href="#">Movie Details</a>
            </div>
          </div>
        `;

    if (movieSearched.results[i].poster_path.length > 1) {
        $('#movies').html(searchedHTML);
    }
}
})
}