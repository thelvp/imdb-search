// Variables
const omdbapiUrl = "http://www.omdbapi.com/";
const apiKey = "adf1f2d7";
const searchform = document.querySelector("form");
const searchresults = document.querySelector("#movie-cards");

// Method to reset the form
const resetForm = () => {
  searchform.reset();
  searchresults.innerHTML = `<p></p>`;
};

// Method to get data from API
const displayMovies = (event) => {
  event.preventDefault();
  const moviename = document.querySelector("#movie-name").value;
  const url = `http://www.omdbapi.com/?s=${moviename}&apikey=${apiKey}`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      const results = data.Search; 
      results.forEach(element => {
        searchresults.insertAdjacentHTML("beforeend", `
        <div class="col-lg-3 col-md-4 col-sm-6 col-12">
        <div class="card mb-2">
          <img src="${element.Poster}" class="card-img-top" alt="${element.Title}">
          <div class="card-body">
            <span class="badge bg-primary mb-2">${element.Year}</span>
            <h5 class="card-title">${element.Title}</h5>
          </div>
        </div>
      </div>`);
      });
    });
  resetForm();
};

// Event listener (submit) + main method
searchform.addEventListener("submit", displayMovies);
