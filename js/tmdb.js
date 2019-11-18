const key = 'dfe4083f20ee35c9d1063c9e336e51d7';
const endpoint_url = 'https://api.themoviedb.org/3/';

//blok kode request api

function getListMovie(){
  fetch(endpoint_url + "/movie/now_playing?api_key=" + key + "&language=en-US&page=1")
  .then(status)
  .then(json)
  .then(function(data){
    var moviesHTML = "";
    data.results.forEach(function(movie){
      moviesHTML +=
    }
  )
  }
)
}
