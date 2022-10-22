const timBtn = document.querySelector('button')
const img =  document.querySelector('.img')
const inputBox = document.querySelector(".input-field input");
const hienthi= document.querySelector('.footer ul')
const url = 'https://pokeapi.co/api/v2/pokemon/'

timBtn.addEventListener("click", () => {
  let pokeData = inputBox.value;
  let apiurl=url+pokeData;
  console.log(apiurl)

  async function getpokemon() {
    const response = await fetch(apiurl);
    const data = await response.json();
    console.log(data);
    return data;
  }

  getpokemon().catch(data => {
    alert("bạn đã nhập sai tên pokemon")
  })

  getpokemon().then(data =>{
    hienthi.innerHTML =`<li>tên pokemon: ${data.name}</li>
     <li>chiều cao pokemon: ${data.height}</li>
     <li>cân nặng pokemon: ${data.weight}</li>
    <li>danh sách hệ pokemon: ${data.types[0].type.name}</li>`;
})

getpokemon().then(data =>{
    img.innerHTML = `<img src="${data.sprites.back_default}" class="avatar"></img>
    <img src="${data.sprites.front_default}" class="avatar"></img>`;
})

})


