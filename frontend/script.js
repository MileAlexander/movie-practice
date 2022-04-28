const movieComponent = `
    <h1>Movies</h1>
`

const movieCardComponent = function (title, year, summary) {
    return`
        <div class="card">
            <h2 class="movieTitle">${title}</h2>
            <h3 class="movieYear">${year}</h3>
            <p class="movieSummary">${summary}</p>
        </div>
    `
}

const loadEvent = function () {
    const rootElement = document.getElementById("root");

    rootElement.insertAdjacentHTML("beforeend", movieComponent)

    for (const movie of movies.cards) {

        rootElement.insertAdjacentHTML("beforeend", movieCardComponent(movie.title, movie.sub, movie.text))

    }
}

window.addEventListener("load", loadEvent)