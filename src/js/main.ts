// http://www.omdbapi.com/?i=tt3896198&apikey=70b6f337

let search = 'james'

const buildList = (data) => {
    clearHTMLLIST();
    const ul = document.getElementsByTagName('ul')[0];
    Array.from(data.Search).forEach((film) => {
        const li = document.createElement('li');
        li.classList.add('film');
        const img = document.createElement('img');
        const txt = document.createElement('h4');

        txt.innerHTML = film['Title'];
        img.src = film['Poster'];
        li.append(img);
        li.append(txt);
        ul.append(li);
    });
}

const clearHTMLLIST = () => {
    const listItems: NodeList = document.querySelectorAll('.film');
    Array.from(listItems).forEach((listItem: Element) => {
        listItem.remove();
    })
}

const searchFilms = () =>  {
    //const userSearch = $("#searchBox").val().toString();
    const boxValue = document.getElementById('searchBox') as HTMLInputElement;
    const userSearch = boxValue.value;
    boxValue.value =  '';
    search = userSearch;
    getAPIData();

}

const getAPIData = () => {
fetch(`http://www.omdbapi.com/?s=${search}&apikey=70b6f337`)
.then((response) => {
    const newResponse = response.json();
    return newResponse;
})
.then((data) => {return buildList(data)})
.catch((error) => {
    throw new Error(error)}
);
}

const checkEnterKey = (ev) => {
    if (ev.code === 'Enter') {searchFilms()};
}

document.getElementById('searchButton').addEventListener("click",searchFilms);
document.getElementById('searchBox').addEventListener("keyup",checkEnterKey);

getAPIData();