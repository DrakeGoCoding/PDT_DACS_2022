async function getRandomUser() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];
    displayUser(user);
    console.log(user);
}


function displayUser(user) {
    const image = document.getElementById('image');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const workPlace = document.getElementById('work-pl'); 
    const location = document.getElementById('locate');  
    const hometown = document.getElementById('hometown'); 
    const gender = document.getElementById('gender');
    const follow = document.getElementById('fl'); 
    
    image.setAttribute('src', `${user.picture.large}`)
    name.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`
    email.innerText = `${user.email} - ${user.phone}`
    workPlace.innerText = `${user.location.state}`
    location.innerText = `${user.location.street.name}`
    hometown.innerText = `${user.location.country}`
    gender.innerText = `${user.gender}`
    follow.innerText = `${user.dob.age} người`
}

getRandomUser();