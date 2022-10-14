const APIkey = "k_pbep12la";
const URLbase = 'https://imdb-api.com/en/API/Top250Movies/'
const API_URL = URLbase + APIkey;

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('pesquisar')

getMovies(API_URL);

function getMovies(url) {
fetch(url)
.then(response => response.json())
.then(data => {
console.log(data.items)
showMovies(data.items);
})
}


function showMovies(data) {
main.innerHTML = '';

data.forEach(movie => {
    const {title, image, imDbRating, crew, year} = movie;
    var movieElemento = document.createElement("div");

    movieElemento.innerHTML = `<div class="filme">
    <img src="${image}" alt="${title}">

    <div class="movie-info">
        <h3>${title}<br><p>${year}</p></h3>
        <span class="green">${imDbRating}</span>
    </div>

    <div class="overview">
        <h3>crew</h3>
        ${crew}
    </div>
</div>
`

    document.getElementById('main').appendChild(movieElemento);
    });
}
   

const pesquisarFilme = async() =>{
    const buscar = search.value;
    const urlPesquisa = `https://imdb-api.com/en/API/SearchMovie/${APIkey}/${buscar}`;
    const dados = await fetch(urlPesquisa);
    const filmesPesquisados = await dados.json();
    console.log(filmesPesquisados.results)
    if (filmesPesquisados.results){
        resultadoMovies(filmesPesquisados.results)
    } else{
        getMovies(API_URL);
    }
}
    


document.getElementById('pesquisar').addEventListener('focusout', pesquisarFilme)



function resultadoMovies(results) {
    main.innerHTML = '';

    results.forEach(filmpesq => {
        const {title, image, description, id} = filmpesq;
        var elementoPesquisado = document.createElement("div");
    
        elementoPesquisado.innerHTML = `<div class="filme">
        <img src="${image}" alt="${title}">
    
        <div class="movie-info">
            <h3>${title}<br><p>ID: ${id}</p></h3>
            <span class="green">None</span>
        </div>
    
        <div class="overview">
            <h3>Descrição</h3>
            ${description}
        </div>
    </div>
    `
    
        document.getElementById('main').appendChild(elementoPesquisado);
        });
    }