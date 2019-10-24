export class FilmHTML {
    html: string;

    constructor(film) {
        this.html = `<div class=film>
                        <div class=visibleInfo>
                            <img src=${film.Poster}>
                            <h4>${film.Title}</h4>
                        </div>
                        <div class=hiddenInfo>
                            <a class="addFaves" id="${film.imdbID}">My Films <i class="fas fa-heart"></i></a>
                        </div>
                    </div>`
    }
}