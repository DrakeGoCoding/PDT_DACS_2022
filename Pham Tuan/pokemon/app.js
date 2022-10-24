const namePokemon = document.querySelector('input');
const searchPokemon = document.querySelector('button');
const display = document.querySelector('.display');
searchPokemon.addEventListener("click", () => {
    let pokemon = namePokemon.value;
    let URL = 'https://pokeapi.co/api/v2/pokemon/' + pokemon;

async function getPokemon(){
   const response = await fetch(URL);
   const data = await response.json();
    return data;
}
    getPokemon().then(data =>{
        display.innerHTML = `
        <li> name: ${data.name}</li>
        <li> heigh: ${data.height} dm</li>
        <li> weight: ${data.weight} hg</li>
        <li> species: ${data.types[0].type.name}</li>
        <img src="${data.sprites.front_default}" alt="anhPokemon">
        <img src="${data.sprites.back_default}" alt="anhPokemon">
        `
    })
    
})
