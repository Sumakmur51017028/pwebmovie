const key = 'dfe4083f20ee35c9d1063c9e336e51d7';
const endpoint_url = 'https://api.themoviedb.org/3';

//blok kode request api

function getListMovie(services, sectiontitle){
  fetch(endpoint_url + services + "?api_key=" + key + "&language=en-US&page=1")
  .then(status)
  .then(json)
  .then(function(data){
    var moviesHTML = "";
    data.results.forEach(function(movie){
      moviesHTML += `
      <div class="col m3 s6">
        <div class="card">
          <a href="./movie.html?id=${movie.id}">
            <div class="card-image waves-effect waves-block waves-light">
              <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" />
            </div>
          </a>
          <div class="card-content text-center">
            <strong>${movie.title}</strong>
            <br>
          Released:  <strong>${movie.release_date}</strong>
          </div>
        </div>
      </div>
      `;
    });
    document.getElementById("movie_list").innerHTML = moviesHTML;
    document.getElementById("section_title").innerHTML = sectiontitle;
  })
  .catch(error);
}
function getMovie( movie_id ){


  document.getElementById("movie_id").innerHTML = movie_id;
}
