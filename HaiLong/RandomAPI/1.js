async function getRandomUser() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];
    displayUser(user);
}

function displayUser(user) {
    const name = document.getElementById('name');
    const gender = document.getElementById('gender');
    const call = document.getElementById('call');
    const email = document.getElementById('email');
    const face = document.getElementById('face');
    const home = document.getElementById('home');
    const pin = document.getElementById('pin');
    const image = document.getElementById('image');

    name.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
    gender.innerText = `${user.gender}`;
    call.innerText = `${user.cell}`;
    email.innerText = `${user.email}`;
    face.innerText = `${user.dob.age}`;
    home.innerText = `${user.location.country}`;
    pin.innerText = `${user.location.postcode}`;
    image.setAttribute('src', `${user.picture.large}`);
}
getRandomUser()