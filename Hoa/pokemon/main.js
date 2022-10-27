document.querySelector("#search").addEventListener('click', getPokemon);
document.querySelector("#pokemonName").addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        getPokemon();
    }
});

function lowerCaseName(name) {
    return name.toLowerCase();
}

// https://pokeapi.co/api/v2/pokemon/
async function getPokemon() {
    const name = document.querySelector("#pokemonName").value;
    const pokemonName = lowerCaseName(name);
    await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.querySelector(".pokemon-contain").innerHTML = `
            <div class="img-box">
                <img src="${data.sprites.front_default}" alt="${data.name}" class="img">
                <img src="${data.sprites.back_default}" alt="${data.name}" class="img">
            </div>
            <div class="pokemonIn4">
                <h2>Tên: ${data.name}</h2>
                <p>Cao: ${data.height}</p>
                <p>Nặng: ${data.weight}</p>
                <p>Hệ: ${data.types[0].type.name}</p>
            </div>
            `;
        })
        .catch((err) => {
            alert(`Không tìm thấy pokemon có tên ${name}`,err);
        })
}