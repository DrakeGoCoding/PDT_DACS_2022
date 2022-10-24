const search = document.getElementById('search');
const search_btn = document.getElementById('search_btn');
const hienthi = document.querySelector('.hienthi');


const getPokemon = async term => {
    const url = `https://pokeapi.co/api/v2/pokemon/${term}`;
    const response = await fetch(url);
    const pokemon = await response.json()
    return pokemon;
}

search_btn.addEventListener('click', () => {
    getPokemon(search.value).then(pokemon => {
        hienthi.innerHTML = `
            <div class="hienthi">
            <img class="anh" src="${pokemon.sprites.front_default}" alt="">
            <img class="anh" src="${pokemon.sprites.back_default}" alt="">
            <h1 id="name-pokemon">${pokemon.name}</h1>
            <h3 class="thuoctinh">Type : ${pokemon.types[0].type.name}</h3>
            <h3 class="thuoctinh">Weight : ${pokemon.weight}g</h3>
            <h3 class="thuoctinh">Height : 0.${pokemon.height}m</h3>
            </div>`;
    })
});

