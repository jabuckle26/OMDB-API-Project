// http://www.omdbapi.com/?i=tt3896198&apikey=70b6f337


const buildList = (data) => {
    console.log(data.Search);
    const ul = document.getElementsByTagName('ul')[0];
    Array.from(data.Search).forEach((film) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const txt = document.createElement('h4');

        txt.innerHTML = film['Title'];
        img.src = film['Poster']
        li.append(img);
        li.append(txt);
        ul.append(li);
    });
}

fetch('http://www.omdbapi.com/?s=james&apikey=70b6f337')
.then((response) => {
    const newResponse = response.json();
    return newResponse;
})
.then((data) => {return buildList(data)})
.catch((error) => {
    throw new Error(error)}
);