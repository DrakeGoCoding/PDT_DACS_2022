const img = document.querySelector('img')
const button = document.querySelector('button')
const username = document.querySelector('.name h1')
const url = 'https://source.unsplash.com/random'
const getImage = async (url) => {
    return await fetch(url).then(res => res.url)
  }

async function getRandomUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
}

console.log(getImage(url))
button.addEventListener('click', () => {
    getImage(url)
      .then(result => {
        img.setAttribute('src', result)
      })
    getRandomUser().then(data =>{
        let i=Math.floor(Math.random() * 10)
        username.innerText =`${data[i].name}`;
    })
    })