import { FilmHTML } from './classes';

let search: string = 'james';
let yearFilter: string = '';
let favouriteList: string[] = [];

const buildList = (data) => {
    clearHTMLLIST();
    const section = document.getElementById('filmContainer');
    Array.from(data.Search).forEach((film) => {
        let filmInstance = new FilmHTML(film);
        section.innerHTML += filmInstance.html;
    });
    Array.from(document.querySelectorAll('.addFaves')).forEach(targetTag => {
        targetTag.addEventListener('click', appendFavourites);
    })
}

const buildFaves = (data) => {
    const section = document.getElementById('filmContainer');
    let filmInstance = new FilmHTML(data);
    section.innerHTML += filmInstance.html;
    document.getElementById(data.imdbID).classList.add('faved');
    document.getElementById(data.imdbID).addEventListener('click', appendFavourites);
}

const clearHTMLLIST = () => {
    const listItems: NodeList = document.querySelectorAll('.film');
    Array.from(listItems).forEach((listItem: Element) => {
        listItem.remove();
    })
}

const searchFilms = () => {
    //const userSearch = $("#searchBox").val().toString();
    document.getElementById('myMovies').style.color = 'white';
    const boxValue = document.getElementById('searchBox') as HTMLInputElement;
    const userSearch = boxValue.value;
    boxValue.value = '';
    const filterBoxValue = document.getElementById('filterYear') as HTMLInputElement;
    yearFilter = filterBoxValue.value;
    filterBoxValue.value = '';

    search = userSearch;
    getAPIData();

}

const getAPIData = () => {
    if (yearFilter === '') {
        fetch(`http://www.omdbapi.com/?s=${search}&apikey=70b6f337`)
            .then((response) => {
                const newResponse = response.json();
                return newResponse;
            })
            .then((data) => { return buildList(data) })
            .catch((error) => {
                throw new Error(error)
            }
            );
    } else {
        fetch(`http://www.omdbapi.com/?s=${search}&y=${yearFilter}&apikey=70b6f337`)
            .then((response) => {
                const newResponse = response.json();
                return newResponse;
            })
            .then((data) => { return buildList(data) })
            .catch((error) => {
                throw new Error(error)
            }
            );
    }
}

const checkEnterKey = (ev) => {
    if (ev.code === 'Enter') { searchFilms() };
}

const showFilterBox = () => {
    let targetBox = document.getElementById('filterYear');
    if (targetBox.style.display === 'inline-block') {
        //Switch to hidden
        targetBox.style.display = "none";
        document.getElementById('filterButton').style.color = "white";
    } else {
        //Switch to visible
        targetBox.style.display = "inline-block";
        document.getElementById('filterButton').style.color = "yellow";
    }
}

const appendFavourites = (e) => {
    if (favouriteList.includes(e.target.id)){
        favouriteList = favouriteList.filter(item => {
            return (item !== e.target.id)
        })
        document.getElementById(e.target.id).classList.remove('faved');
    } else {
    favouriteList.push(e.target.id);
    markAsFavouritie(e);
    }
}


const showFavourites = () => {
    document.getElementById('myMovies').style.color = 'red';
    clearHTMLLIST();
    favouriteList.forEach(id => {
        if (id !== '') {
            fetch(`http://www.omdbapi.com/?i=${id}&apikey=70b6f337`)
                .then((response) => {

                    const newResponse = response.json();
                    return newResponse;
                })
                .then((data) => {
                    return buildFaves(data)
                })
                .catch((error) => {
                    throw new Error(error)
                }
                );
        }
    });
}

const markAsFavouritie = (e) => {
    let a: HTMLElement = e.target;
    a.classList.toggle('faved');
}

document.getElementById('searchButton').addEventListener("click", searchFilms);
document.getElementById('searchBox').addEventListener("keyup", checkEnterKey);
document.getElementById('filterButton').addEventListener('click', showFilterBox);
document.getElementById('myMovies').addEventListener('click', showFavourites);


getAPIData();
