let img = document.getElementById('img');
let txt = document.getElementById('text');
let numero = document.getElementById('num');
  numero.value = 1; 

function renderPokemon(imagen, name){
    img.setAttribute('src', imagen);
    txt.innerHTML = name;
}

 function verPokemon(){
    fetch(`https://pokeapi.co/api/v2/pokemon/${numero.value}/`)
        .then(response => response.json())
        .then(pokemon => {
            let imagen = pokemon.sprites.front_default;
            let nombre = pokemon.name;
            renderPokemon(imagen, nombre);
     });
}


