const movieCardComponent = function (title, year, summary) {
    return`
        <div class="card">
            <h1 class="movieTitle">${title}</h1>
            <h2 class="movieYear">${year}</h2>
            <h3 class="movieSummary">${summary}</h3>
        </div>
    `
}

const loadEvent = function () {
    const rootElement = document.getElementById("root");

    for (const movie of movies.cards) {

        rootElement.insertAdjacentHTML("beforeend", movieCardComponent(movie.title, movie.sub, movie.text))

    }
}

window.addEventListener("load", loadEvent)