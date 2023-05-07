let input = document.getElementById("input"),
    button = document.getElementById("searchBtn"),
    result = document.getElementById("result");

let getMovie = () => {
    let movieName = input.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

    if (movieName == '') {
        result.innerHTML = `<h3 class="message">Please enter a movie name 🍿</h3>`;
    }

    else {
        fetch(url).then((resp) => resp.json()).then((data) => {
            if (data.Response == "True") {
                result.innerHTML = `
                    <div class="info">
                        <img src=${data.Poster} class="poster">
                        <div>
                            <h2>${data.Title}</h2>
                            <div class="rating">
                                <i class="ri-star-fill"></i>
                                <h4>${data.imdbRating}</h4>
                            </div>
                            <div class="details">
                                <span>${data.Rated}</span>
                                <span>${data.Year}</span>
                                <span>${data.Runtime}</span>
                            </div>
                            <div class="genre">
                                <div>${data.Genre.split(",").join("</div><div>")}</div>
                            </div>
                        </div>
                    </div>
                    <h3>Plot:</h3>
                    <p>${data.Plot}</p>
                    <h3>Cast:</h3>
                    <p>${data.Actors}</p>
                `;
            }
            else {
                result.innerHTML = `<h3 class="message">Movie not found 🧐</h3>`;
            }
        })
            .catch(() => {
                result.innerHTML = `<h3 class="message">Error Occured</h3>`;
            });
    }
};

button.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);