export class FilmHTML {
    html: string;

    constructor(film) {
        this.html = `<li class=film>
                        <img src=${film.Poster}>
                        <h4>${film.Title}</h4>
                    </li>`
    }
}