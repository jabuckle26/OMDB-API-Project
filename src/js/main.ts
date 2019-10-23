// http://www.omdbapi.com/?i=tt3896198&apikey=70b6f337

let search = 'james';
let yearFilter = '';

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

const searchFilms = () => {
    //const userSearch = $("#searchBox").val().toString();
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
    console.log('J', yearFilter);
    console.log('J', search);
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
        console.log(yearFilter, 'HERE');
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
    let targetDiv = document.getElementById('filterWindow');
    if (targetDiv.style.display === 'flex') {
        //Switch to hidden
        targetDiv.style.display = "none";
        document.getElementById('filterButton').style.color = "white";
    } else {
        //Switch to visible
        targetDiv.style.display = "flex";
        document.getElementById('filterButton').style.color = "black";
    }
}

const filterSearch = () => {
    const boxValue = document.getElementById('filterYear') as HTMLInputElement;
    yearFilter = boxValue.value;
    console.log(yearFilter);
    //getAPIData(yearFilter);
}

document.getElementById('searchButton').addEventListener("click", searchFilms);
document.getElementById('searchBox').addEventListener("keyup", checkEnterKey);
document.getElementById('filterButton').addEventListener('click', showFilterBox);
// document.getElementById('selectFilter').addEventListener('click', filterSearch);

getAPIData();