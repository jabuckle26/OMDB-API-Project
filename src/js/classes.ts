export class FilmHTML {
    html: string;

    constructor(film) {
        this.html = `<div class=film>
                        <img src=${film.Poster}>
                        <h4>${film.Title}</h4>
                    </div>`
    }
}