const nameEl = document.getElementById("name");
const imageEl = document.getElementById("avatar");
const randomBtn = document.getElementById("random-btn");
const genderEl = document.getElementById("gender");
const ageEl = document.getElementById("dob");
const phoneEl = document.getElementById("phone");
const emailEl = document.getElementById("email");
const locationEl = document.getElementById("location");

randomBtn.addEventListener("click", async () => {
	const res = await getRandomPerson();
	console.log(res);
	const { name, picture, gender, dob, phone, email, location } = res;

	nameEl.innerHTML = [name.first, name.last].join(" ");
	imageEl.src = picture.large;
	genderEl.innerHTML = gender;
	ageEl.innerHTML = dob.age;
	phoneEl.innerHTML = phone;
	emailEl.innerHTML = email;
	locationEl.innerHTML = [location.city, location.country].join(", ");
});

const getRandomPerson = async () => {
	const response = await fetch("https://randomuser.me/api/");
	const data = await response.json();
	return data.results[0];
};
